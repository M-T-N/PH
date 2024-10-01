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

	if (document.URL.includes('/upsell')) {

	console.log('[QA- PROD] MXN3147 | CSAB-4 | Upsell Series: Sticky CTAs');

	//css
	document.querySelector('head').insertAdjacentHTML('beforeend', `<style>
		#__next {
			z-index: 10;
			position: relative;
		}
		header {
			position: relative;	
		}
		header > .MuiGrid-container {
			z-index: 100;
			background: white;
		}
		.sticky-cta {
			max-width: 1152px;
			margin: 0 auto;
			padding: 20px 32px;
			width: 100%;
			position: absolute;
			left: 0;
			right: 0;
			top: -80px;
			z-index: 2;
			transition: all 0.2s ease-in;
		}
		.sticky-cta.active {
			position: fixed;
			top: 51px;
			background: white;
			transition: all 0.2s ease-in;
		}
		.sticky-cta__buttons {
			display: flex;
			max-width: 728px;
			justify-content: space-between;
			flex-direction: column;
			gap: 10px;
		}
		.sticky-cta__buttons button {
			width: 100%;
			height: 40px;
			font-size: 16px;
			font-style: normal;
			font-family: open_sans_semi;
			font-weight: 600;
			line-height: 1.5;
			border: 1px solid red;
			font-stretch: normal;
			padding-left: 1.4rem;
			padding-right: 1.4rem;
			letter-spacing: 1px;
			border-radius: 8px;
			text-transform: uppercase;
			cursor: pointer;
			background: white;
		}
		.sticky-cta__buttons__add-more button {
			background: white;
			color: #E21216;
		}
		.sticky-cta__buttons__add-more button:hover {
			background: rgba(226, 18, 22, 0.04);
		}
		.sticky-cta__buttons__view-order button {
			background: #E21216;
			color: white;
		}
		@media (min-width: 651px) {
			.sticky-cta__buttons {
				flex-direction: row;
			}
			.sticky-cta__buttons button {
				width: 280px;
			}
		}
		@media (min-width: 651px) and (max-width: 850px) {

		}
		@media (min-width: 851px) {
			.sticky-cta {
				top: -80px;
				padding: 20px 48px;
			}
			.sticky-cta.active {
				top: 0;
			}
		}
	</style>`)
  
	// add new html to header
	document.querySelector('header').insertAdjacentHTML('beforeend', `
	<div class="sticky-cta">
		<div class="sticky-cta__buttons">
		</div>
	</div>
	`);

	document.querySelector('.sticky-cta__buttons').innerHTML =  `
		<div class="sticky-cta__buttons__add-more">
			<button>
				<span>Add More Food</span>
			</button>
			</div>
			<div class="sticky-cta__buttons__view-order">
				<button>
					<span>View Order</span>
				</button>
			</div>
	`;




	// intersection observer when form goes out of view
	const onIntersection = (entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) {
				document.querySelector('.sticky-cta').classList.add('active');
			}
			if (entry.isIntersecting) {
				document.querySelector('.sticky-cta').classList.remove('active');
			}
		}
	};
	const observer = new IntersectionObserver(onIntersection);
	observer.observe(document.querySelector('h1[role="heading"]').nextElementSibling);



	//sim clicks
	document.querySelector('.sticky-cta__buttons__add-more button').addEventListener('click', () => {
		document.querySelector('[data-testid="secondary-cta-button-add-more-food"]').click();
	});

	document.querySelector('.sticky-cta__buttons__view-order button').addEventListener('click', () => {
		document.querySelector('[data-testid="primary-cta-button-view-order"]').click();
	});

}
}



pollCallback(['h1[role="heading"]'], function() {

	init();

}, true);

