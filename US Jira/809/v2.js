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

	console.log("CSAB-80 Homepage Exposed Categories");

	//css
	document.querySelector('head').insertAdjacentHTML('beforeend', `
		<style>
			.exposed-menu {
				padding-top: 36px;
			}
			.exposed-menu__title {
				font-family: PizzaHutFont;	
			}
			.exposed-menu__title h1 {
				font-size: 32px;
				font-weight: 400;
			}
			.exposed-menu__items {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 20px;
			}
			.exposed-menu__items__item {
				text-decoration: none;
				border-radius: 8px;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
			}
			.exposed-menu__items__item:hover {
				cursor: pointer;
			}
			.exposed-menu__items__item img {
				width: 100%;
				border-radius: 8px 8px 0 0;
    		display: block;
			}
			.exposed-menu__items__item__title {
				display: flex;
				justify-content: center;
				padding: 12px 0;
			}
			.exposed-menu__items__item__title h4 {
				margin: 0;
    		line-height: 1;
				color: #131313;
				font-size: 20px;
				letter-spacing: normal;
			}
			@media (min-width: 651px) and (max-width: 850px) {
				.exposed-menu__items {
					grid-template-columns: repeat(3, 1fr);
				}
			}
			@media (min-width: 851px) {
				.exposed-menu {
					padding-top: 48px;
				}
				.exposed-menu__title h1 {
					font-size: 48px;
					margin: 0;
					margin-bottom: 24px;
				}
				.exposed-menu__items {
					grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
				}
			}
		</style>
	`);


	// add new section above marketing banners
	if (!document.querySelector('.exposed-menu')) {
		document.querySelector('div[data-testid="homepage-mkt-banners"]').insertAdjacentHTML('beforebegin', `
			<div class="exposed-menu">
				<div class="exposed-menu__title">
					<h1>Pizza is better with</h1>
				</div>
				<div class="exposed-menu__items">
					<a class="exposed-menu__items__item">
						<img src="//cdn.optimizely.com/img/19558781057/b50f64dcc8bd4fa793dd19a7ed405e00.jpg" alt="Wings">
						<div class="exposed-menu__items__item__title">
							<h4>Wings</h4>
						</div>
					</a>
					<a class="exposed-menu__items__item">
						<img src="//cdn.optimizely.com/img/19558781057/87c369522f5f4b36a66153a9ced8119d.jpg" alt="Melts">
						<div class="exposed-menu__items__item__title">
							<h4>Melts</h4>
						</div>
					</a>
					<a class="exposed-menu__items__item">
						<img src="//cdn.optimizely.com/img/19558781057/f06f3901cb6d4ccb8c462b441e018f69.jpg" alt="Pasta">
						<div class="exposed-menu__items__item__title">
							<h4>Pasta</h4>
						</div>
					</a>
					<a class="exposed-menu__items__item">
						<img src="//cdn.optimizely.com/img/19558781057/c511fbe6558b4670af596880dd6ba3cb.jpg" alt="Sides">
						<div class="exposed-menu__items__item__title">
							<h4>Sides</h4>
						</div>
					</a>
					<a class="exposed-menu__items__item">
						<img src="//cdn.optimizely.com/img/19558781057/08943c1189af4201bb88ef4b531f3ccc.jpg" alt="Desserts">
						<div class="exposed-menu__items__item__title">
							<h4>Desserts</h4>
						</div>
					</a>
					<a class="exposed-menu__items__item">
						<img src="//cdn.optimizely.com/img/19558781057/1c706d355619453cb05ab4f823799c8e.jpg" alt="Dips">
						<div class="exposed-menu__items__item__title">
							<h4>Dips</h4>
						</div>
					</a>
				</div>
			</div>	
		`);
	}

	
	// add click events to send data
	document.querySelectorAll('.exposed-menu__items__item').forEach(el => {
		function getUrl(term) {
			return el.querySelector('img').alt == term;
		}
		switch (true) {
			case getUrl('Wings'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experiment_action: "click", experiment_variable: "Homepage Exposed Category (US-809) - Wings" });
					ph.route('/menu/wings');
				});
				break;
			case getUrl('Melts'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experiment_action: "click", experiment_variable: "Homepage Exposed Category (US-809) - Melts" });
					ph.route('/menu/melts');
				});
				break;
			case getUrl('Pasta'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experiment_action: "click", experiment_variable: "Homepage Exposed Category (US-809) - Pasta" });
					ph.route('/menu/pasta');
				});
				break;
			case getUrl('Sides'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experiment_action: "click", experiment_variable: "Homepage Exposed Category (US-809) - Sides" });
					ph.route('/menu/sides');
				});
				break;					
			case getUrl('Desserts'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experiment_action: "click", experiment_variable: "Homepage Exposed Category (US-809) - Desserts" });
					ph.route('/menu/desserts');
				});
				break;
			case getUrl('Dips'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experiment_action: "click", experiment_variable: "Homepage Exposed Category (US-809) - Dips" });
					ph.route('/menu/dips');
				});
				break;
			}
	});

  
}



pollCallback(['#footer'], function() {
	init();

  //mutationObserver for target element if needed
	// const observer = new MutationObserver(init);
	// observer.observe(document.querySelector('theElement'), {childList: true, subtree: true });
}, true);

