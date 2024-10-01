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
  
	console.log("US-882 - Double Column Treatment Take 2 - V2");
	
	//css
	document.querySelector('head').insertAdjacentHTML('beforeend', `
		<style>
			/* set div heights to 100% to make siblings same height */
			.deal-tile--wrapper > button,
			.deal-tile--wrapper > button > div,
			.deal-tile--wrapper > button > div > div > div,
			.deal-tile--wrapper > button > div > div > div > div {
			  height: 100%;
			}

			[data-testid="deals-localized-list"] {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 20px 15px;
			}
			.deal-tile--wrapper {
				border-bottom: none;
				width: 100%;
			}
			.deal-tile--wrapper > button {
				padding: 0;
			}
			.deal-tile--wrapper--intermediate {
				margin: 0;
				width: auto;
			}
			.deal-tile {
				border-radius: 10px;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
				padding: 0 0 8px 0 !important;
			}
			.deal-tile__inner {
				flex-direction: column;
			}
			.deal-tile__inner__img-wrap img {
				width: 100%;
				height: 200px;
				border-radius: 10px 10px 0 0;
				padding: 0;
				display: block;
			}
			.deal-tile__inner__text-wrap {
				align-items: center;
				gap: 10px;
				padding: 10px 10px 0;
				height: 100%;
				justify-content: space-between;
			}
			.deal-tile__inner__text-wrap__name-price {
				width: 100%;
				justify-content: flex-start;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 10px;
			}
			.deal-tile__inner__text-wrap__name-price__name {
				width: 100%;
			}
			.deal-tile__inner__text-wrap__name-price__name p {
				font-family: "open_sans", sans serif;
				font-size: 16px;
				font-weight: 700;
				display: inline-block;
				inline-size: -webkit-fill-available;
				max-inline-size: fit-content;
			}
			.deal-tile__inner__text-wrap__name-price__price {
				font-family: PizzaHutFont;
				text-align: right;
			}
			[data-testid="secondary-cta-button-get-started"] {
				width: 100%;
				border-radius: 12px;
				white-space: nowrap;
			}
			.atc-wrapper {
				width: 100%;
			}
			[data-testid="secondary-cta-button-get-started"] > span {
				width: 100%;
			}
			@media (min-width: 651px){

			}
			@media (min-width: 851px){

			}
		</style>
	`);

	// set class names
	document.querySelectorAll('[data-testid="deals-localized-list"] > div > div').forEach(el => {
		el.classList.add('deal-tile--wrapper')
		el.querySelector('button > div').classList.add('deal-tile--wrapper--intermediate');
	});
	document.querySelectorAll('[data-testid="deals-localized-list"] > div button > div > div').forEach(el => {
		// main class
		el.classList.add('deal-tile');
		// inner wrapper class
		el.querySelector('div > div > div > div').classList.add('deal-tile__inner');
		// image wrapper
		el.querySelector('div > div > div > div > div').classList.add('deal-tile__inner__img-wrap');
		// text wrapper
		el.querySelector('div > div > div > div > div:nth-child(2)').classList.add('deal-tile__inner__text-wrap');
		// deal name/price
		el.querySelector('div > div > div > div > div:nth-child(2) > div').classList.add('deal-tile__inner__text-wrap__name-price');
		// deal name
		el.querySelector('div > div > div > div > div:nth-child(2) > div > div').classList.add('deal-tile__inner__text-wrap__name-price__name');
		// deal price
		if (el.querySelector('div > div > div > div > div:nth-child(2) > div > p')) {
			el.querySelector('div > div > div > div > div:nth-child(2) > div > p').classList.add('deal-tile__inner__text-wrap__name-price__price');
		}
		el.querySelector('div > div > div > div > div:nth-child(2) > div:nth-child(2)').classList.add('atc-wrapper');
	});


}



pollCallback(['[data-testid="deals-localized-list"]', '[data-testid="localized-menu-tile-7-deal-lovers-menu"]'], function() {
	init();

  //mutationObserver for target element if needed
	// const observer = new MutationObserver(init);
	// observer.observe(document.querySelector('theElement'), {childList: true, subtree: true });
}, true);

