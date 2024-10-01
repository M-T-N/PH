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

	//css
	document.querySelector('head').insertAdjacentHTML('beforeend', `
		<style>
			.popularPizzas {
				
			}
			.popularPizzas a {
				text-decoration: none;
				display: flex;
				flex-direction: column;
				gap: 40px;
			}
			.popularPizzas__hero img {
				width: 100%;
				display: block;
				border-radius: 8px;
			}
			.popularPizzas__text {
				display: flex;
				align-items: center;
				gap: 20px;
			}
			.popularPizzas__text__header {
				font-family: PizzaHutFont;
				font-size: 48px;
				font-weight: 400;
				color: #131313;
				margin: 0;
				line-height: 28px;
				letter-spacing: normal;
				font-style: normal;
			}
			.popularPizzas__text__link {
				display: flex;
			}
			.popularPizzas__text__link p {
				font-family: open_sans_semi;
				font-weight: 400;
				font-size: 14px;
				color: #E21216;
				text-transform: uppercase;
				margin: 0;
				line-height: 1;
			}
			.popularPizzas__text__link p:hover {
				text-decoration: underline;
			}
		</style>`);	

		const chevron = document.querySelector('[data-testid="homepage-pop_pizza_header-text"]').nextElementSibling.querySelector('svg').outerHTML;

		const popularPizzaSection	=	`
		<div class="popularPizzas">
			<a href="/menu/pizza">
				<section class="popularPizzas__hero">
					<img src="//cdn.optimizely.com/img/19558781057/634f197e54014baf8ec474f94b8d86ce.jpg" alt="popular pizzas">
				</section>
				<section class="popularPizzas__text">
					<h2 class="popularPizzas__text__header">Popular pizzas</h2>
					<div class="popularPizzas__text__link">
						<p>View Menu</p>
						${chevron}
					</div>
				</section>
			</a>
		</div>	
		`;

		
		document.querySelector('[data-testid="homepage-pop_pizza_header-text"]').parentElement.parentElement.innerHTML = popularPizzaSection;

	}


pollCallback(['[data-testid="homepage-pop_pizza_header-text"], #hut-favorites-one-click-container'], function() {
	init();

  //mutationObserver for target element if needed
	// const observer = new MutationObserver(init);
	// observer.observe(document.querySelector('theElement'), {childList: true, subtree: true });
}, true);

