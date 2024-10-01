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

	if (document.querySelector('.hero')) {
		document.querySelector('.hero').remove();
	}

	console.log('CSAB-30 -- Homepage image expanded -- V1');


	// css
	document.querySelector('head').insertAdjacentHTML('beforeend', `
		<style>
			.hero {
				background-image: url(//cdn.optimizely.com/img/19558781057/bf35c821fad14c29a48c82ae2a0be28c.png);
				background-size: cover;
				background-position: center;
				display: flex;
				justify-content: center;	
				position: relative;
				z-index: 1001;
				margin-bottom: 40px;
			}
			.hero--wrapper {
				display: flex;
				justify-content: center;
				width: 1056px;
				height: 422px;
				margin: 0 auto;
			}
			.hero__body {
				background: white;
				width: 350px;
				height: fit-content;
				display: flex;
				flex-direction: column;
				padding: 20px;
				border-radius: 10px;
				gap: 15px;
				position: absolute;
				top: 254px;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
			}
			.hero__body__header {
				font-family: 'PizzaHutFont';
				font-size: 20px;
			}
			.hero__body__text {
				font-family: 'open_sans_semi';
			}
			.hero__body__button button{
				width: 100%;
				background: #E21216;
				color: white;
				border: none;
				border-radius: 7px;
				height: 40px;
				text-transform: uppercase;
				font-family: 'open_sans_semi';
				font-weight: 600;
				letter-spacing: 1px;
				cursor: pointer;
			}
			.hero__body * {
				margin: 0;
			}
			@media (min-width: 651px) and (max-width: 850px) {
				
			}
			@media (min-width: 851px) {
				.hero {
					background-image: url(//cdn.optimizely.com/img/19558781057/bb0ae8303cbc4a0b9697ad42f413356f.png);
					justify-content: flex-start;	
					align-items: flex-end;
					padding: 50px;
					height: 422px;
				}
				.hero--wrapper {
					justify-content: flex-start;
					align-items: flex-end;
					height: 100%;
				}
				.hero__body {
					position: static;
    			bottom: unset;
				}
			}
		</style>	
	`);


	// add new hero section
	if (!document.querySelector('.hero')) {
		document.querySelector('#content').parentElement.parentElement.insertAdjacentHTML('beforebegin', `
			<section class="hero">
				<div class="hero--wrapper">
					<div class="hero__body">
							<div class="hero__body__header">
								<h2>Hero Product Name</h2>
							</div>	
							<div class="hero__body__text">
								<p>	
									Description of the product
								</p>
							</div>
							<div class="hero__body__button">
								<button>
									Get Started
								</button>
							</div>
					</div>
				</div>
			</section>	
		`);
	}
  
}



pollCallback(['[data-testid="localization-grid"][tabindex="0"]'], function() {
	init();

  //mutationObserver for target element if needed
	// const observer = new MutationObserver(init);
	// observer.observe(document.querySelector('theElement'), {childList: true, subtree: true });
}, true);

