function pollCallback(
  selectors,
  callback,
  stayConnected = false
) {

  const results = new Map();
  const saveResult = (index, nodes) => {

    var _results$get;
		results.set(index, [...((_results$get = results.get(index)) !== null && _results$get !== void 0 ? _results$get : []), ...nodes]);

    if (results.size === selectors.length) {
      const sortedResults = Array.from(results.entries())
        .sort(([indexA], [indexB]) => indexA - indexB)
        .map(([, items]) => items);
      callback(sortedResults);
      results.clear();
    }
  };


  const pollSingle = (selector, selectorIndex) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length) {
      saveResult(selectorIndex, Array.from(elements));
    }
    if (elements.length && !stayConnected) return;
    const observer = new MutationObserver(mutations => {
      let shouldDisconnect = false;
      /**
       * A collection of all nodes matching the selector
       * found in all mutation records for this call.
       */
      let nodes = [];
      mutations.forEach(mutation => {
        const addedNodes = Array.from(mutation.addedNodes);
        // top level [node, node]
        for (let node of addedNodes) {
          if (node.matches && node.matches(selector)) {
            nodes.push(node);
            shouldDisconnect = !stayConnected;
            // Fall thru to the next check even if matching nodes were found,
            // as we are collecting all matching nodes, which may be nested.
          }
          // subtree node [node > *]
          if (
            node !== null &&
            node.querySelectorAll &&
            node.querySelectorAll(selector).length
          ) {
            nodes = [
              ...nodes,
              ...Array.from(node.querySelectorAll(selector)),
            ];
            shouldDisconnect = !stayConnected;
          }
        }
      });

      if (nodes.length) {
        saveResult(selectorIndex, nodes);
        shouldDisconnect && observer.disconnect();
      }

    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return observer;
  };

  const observers = [];
  
  selectors.forEach((item, index) => {
    observers.push(pollSingle(item, index));
  });


  return {
    cancel() {
      observers.forEach((observer) => {
        observer === null || observer === void 0 ? void 0 : observer.disconnect()
      });
    },
  };
}


function init() {

	console.log('[DEV - DARK] MXN3147 | CSAB-83 | Party of One Hmpg Banner -- V2');

	if (document.querySelector('.partyOfOne')) return;

	//css
	document.querySelector('head').insertAdjacentHTML('beforeend', `
		<style>
		  div[data-testid="homepage-sidekick-grid"] {
				margin-bottom: 30px;
			}
			.partyOfOne {
				border-radius: 10px;
				box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);
				}
			.partyOfOne a {
				display: flex;
				align-items: stretch;
				text-decoration: none;
				color: #131313;
			}
			.partyOfOne__body {
				padding: 0 20px;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				gap: 5px;
			}
			.partyOfOne__body > * {
				margin: 0;
			}
			.partyOfOne__body h3 {
				font-family: PizzaHutFont;
				font-size: 16px;
			}
			.partyOfOne__body p {
				font-family: open_sans_semi;
				font-size: 14px;
			}
			.partyOfOne__img img {
				border-radius: 10px 0 0 10px;
				display: block;
			}
			img.partyOfOne__img--desktop {
				display: none;
			}
			.partyOfOne__icon {
				display: flex;
				justify-content: center;
				align-items: center;
				background: #E21216;
				padding: 0 5px;
				border-radius: 0 10px 10px 0;
			}
			.partyOfOne__icon--wrapper {
				background: #fff;
				padding: 5px;
				border-radius: 50%;
			}
			.partyOfOne__icon--wrapper img {
				display: block;
				width: 10px;
			}
			@media (min-width: 651px){
				img.partyOfOne__img--desktop {
					display: block;
				}
				img.partyOfOne__img--mobile {
					display: none;
				}	
			}
			@media (min-width: 851px){
				.partyOfOne__body h3 {
					font-size: 24px;
				}
				.partyOfOne__body p {
					font-size: 20px;
				}
			}
			@media (min-width: 930px){	
				.partyOfOne__body {
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
					gap: 15px;
				}
			}
		</style>
	`);



  document.querySelector('[data-testid="homepage-sidekick_header_CTA-text"]').parentElement.nextElementSibling.insertAdjacentHTML('afterend', `
      <div class="partyOfOne">
				<a href="/menu/partyofone">
					<div class="partyOfOne__img">
						<img src="//cdn.optimizely.com/img/19558781057/9678b4978d05435f9c5d81bb9f5b2a2b.jpg" alt="" class="partyOfOne__img--desktop">
						<img src="//cdn.optimizely.com/img/19558781057/d21fd62a4632492cbdef7d4a196ccb8b.jpg" alt="" class="partyOfOne__img--mobile">
					</div>
					<div class="partyOfOne__body">
						<h3>A menu just for you.</h3>
						<p>My Hut Box&trade;, Pizza & Melts!</p>
					</div>
					<div class="partyOfOne__icon">
						<div class="partyOfOne__icon--wrapper">
							<img src="//cdn.optimizely.com/img/19558781057/4ee5e80bdfbd490db09d4b3b68cdfa6c.png" alt="">
						</div>
					</div>
				</a>
      <div>
  `);
	

  
}


pollCallback(['[data-testid="homepage-sidekick_header_CTA-text"]'], function() {

	init();

  //mutationObserver for target element if needed
	const observer = new MutationObserver(init);
	observer.observe(document.querySelector('#content'), {childList: true, subtree: true });
	
}, true);

