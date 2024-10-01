// Hide Popular Pizza
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
			@media (max-width:375px) {
				.popularPizzas__text {
					flex-direction: column;
					align-items: flex-start;
				}
			}
			.popularPizzas {
				padding-top: 15px;
			}
			.popularPizzas a {
				text-decoration: none;
				display: flex;
				flex-direction: column;
				gap: 25px;
			}
			.popularPizzas__hero img {
				width: 100%;
				display: block;
				border-radius: 8px;
			}
			.popularPizzas__text {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: flex-end;
				gap: 10px;
			}
			.popularPizzas__text__header {
				font-family: PizzaHutFont;
				font-size: 32px;
				font-weight: 400;
				color: #131313;
				margin: 0;
				line-height: normal;
				font-stretch: normal;
				line-height: 25px;
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
			}
			.popularPizzas__text__link p:hover {
				text-decoration: underline;
			}
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
					justify-content: flex-start;
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
		</style>`);	

		
	if (document.querySelector('[data-testid="homepage-pop_pizza_header-text"]')) {

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
  




	// add new section above marketing banners
	if (!document.querySelector('.exposed-menu')) {
		document.querySelector('div[data-testid="homepage-mkt-banners"]').insertAdjacentHTML('beforebegin', `
			<div class="exposed-menu">
				<div class="exposed-menu__title">
					<h1>Level up with...</h1>
				</div>
				<div class="exposed-menu__items">
					<a href="/menu/wings" class="exposed-menu__items__item">
						<img src="https://www.pizzahut.com/assets/w/tile/thor/Wings_ProductTile_TraditionalWings_Web_175x203.jpg" alt="Wings">
						<div class="exposed-menu__items__item__title">
							<h4>Wings</h4>
						</div>
					</a>
					<a href="/menu/melts" class="exposed-menu__items__item">
						<img src="https://www.pizzahut.com/assets/w/tile/thor/Melts_ProductTile_PepLoverMelt_Web_175x203.jpg" alt="Melts">
						<div class="exposed-menu__items__item__title">
							<h4>Melts</h4>
						</div>
					</a>
					<a href="/menu/pasta" class="exposed-menu__items__item">
						<img src="https://www.pizzahut.com/assets/w/tile/thor/Pastas_ProductTile_ChickenAlfredoPasta_Breadsticks_Web_175x203.jpg" alt="Pasta">
						<div class="exposed-menu__items__item__title">
							<h4>Pasta</h4>
						</div>
					</a>
					<a href="/menu/sides" class="exposed-menu__items__item">
						<img src="https://www.pizzahut.com/assets/w/tile/thor/Sides_ProductTile_Breadsticks_Web_175x203.jpg" alt="Sides">
						<div class="exposed-menu__items__item__title">
							<h4>Sides</h4>
						</div>
					</a>
					<a href="/menu/desserts" class="exposed-menu__items__item">
						<img src="https://www.pizzahut.com/assets/w/tile/thor/Desserts_ProductTIle_CINNABON_Web_175x203.jpg" alt="Desserts">
						<div class="exposed-menu__items__item__title">
							<h4>Desserts</h4>
						</div>
					</a>
					<a href="/menu/dips" class="exposed-menu__items__item">
						<img src="https://www.pizzahut.com/assets/w/tile/thor/Dips_ProductTIle_Marinara_Web_175x203.jpg" alt="Dips">
						<div class="exposed-menu__items__item__title">
							<h4>Dips</h4>
						</div>
					</a>
				</div>
			</div>	
		`);
	}


  
}



pollCallback(['[data-testid="homepage-pop_pizza_header-text"], #hut-favorites-one-click-container'], function() {
	init();

  //mutationObserver for target element if needed
	// const observer = new MutationObserver(init);
	// observer.observe(document.querySelector('theElement'), {childList: true, subtree: true });
}, true);
