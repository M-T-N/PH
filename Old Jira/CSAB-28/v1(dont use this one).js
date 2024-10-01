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
				.quick-upsell {
					max-width: 728px;
					display: flex;
					flex-direction: column;
					gap: 15px;
				}
				.quick-upsell__card {
					display: flex;
					height: 85px;
					justify-content: flex-start;
					position: relative;
					gap: 15px;
					cursor: pointer;
					box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
					border-radius: 8px;
				}
				.quick-upsell__card__img img {
					border-radius: 8px 0 0 8px;
					height: 100%;
					display: block;
				}
				.quick-upsell__card__details {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					gap: 3px;
					padding: 8px 10px 8px 0;
				}
				.quick-upsell__card__details__name {
					font-weight: bold;
					font-size: 15px;
				}
				.quick-upsell__card__details__name p {
					margin: 0;
					font-size: 14px;
					line-height: 18px;
				}
				.quick-upsell__card__details__price {
					font-size: 15px;
				}	
				.quick-upsell__card__details__price p {
					margin: 0;
				}
				.quick-upsell__card__atc-icon {
					position: absolute;
					right: 10px;
					bottom: 5px;
				}
				.quick-upsell__card__atc-icon img {
					width: 20px;
				}
				@media (min-width: 850.96px) {
					.quick-upsell {
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						gap: 10px;
					}
					.quick-upsell__card {
						flex-basis: 49%;
					}
				}
			</style>
		`);

		
		
		// get item price
		function getPrice(itemCard) {
			if (itemCard) {
				return itemCard.closest('div[data-testid="localized-product-tile-container"]').querySelector('p[data-testid="localized-product-tile-price"]').textContent;
			} else {
				null;
			}
		}

		// setup holders for card data
		let ranchText, parmText, pepperText, ranchPrice, parmPrice, pepperPrice;

		// name of IDs for targeting
		const ranchCard = document.getElementById('Ranch-label');
		const parmCard = document.getElementById('Parmesan-&-Romano-Grated-Cheese-Mini-Shaker-label');
		const pepperCard = document.getElementById('Crushed-Red-Pepper-Mini-Shaker-label');


		const ranchImg = 'https://www.pizzahut.com/assets/w/tile/thor/Dips_ProductTile_Ranch_Web_175x203.jpg';
		const parmImg = 'https://www.pizzahut.com/assets/w/tile/thor/Seasonings_ProductTile_PARMSHAKER_Web_175x203.jpg';
		const pepperImg = 'https://www.pizzahut.com/assets/w/tile/thor/Seasonings_ProductTile_PEPPERSHAKER_Web_175x203.jpg';


		if (ranchCard) {
			ranchText = ranchCard.closest('[data-testid="localized-product-tile-container"]').querySelector('[data-testid="localized-product-tile-name"]').innerText;

			ranchPrice = getPrice(ranchCard);
		}

		if (parmCard) {
			parmText = parmCard.closest('[data-testid="localized-product-tile-container"]').querySelector('[data-testid="localized-product-tile-name"]').innerText;

			parmPrice = getPrice(parmCard);
		}

		if (pepperCard) {
			pepperText = pepperCard.closest('[data-testid="localized-product-tile-container"]').querySelector('[data-testid="localized-product-tile-name"]').innerText;

			pepperPrice = getPrice(pepperCard);
		}

		// push cards to arr
		const cards = [ranchCard, parmCard, pepperCard];



		function createCard(titleText, image, price) {
			return `
				<div class="quick-upsell__card" data-product="${titleText}">
					<div class="quick-upsell__card__img">
						<img src=${image} alt="${titleText}">
					</div>
					<div class="quick-upsell__card__details">
						<div class="quick-upsell__card__details__name">
							<p>${titleText}</p>
						</div>
						<div class="quick-upsell__card__details__price">
							<p>
								${price}
							</p>
						</div>
					</div>					
					<div class="quick-upsell__card__atc-icon">
						<img src="https://cdn.optimizely.com/img/19558781057/f2cdc1401e26488680aeb2795330969e.png" alt="add to cart">
					</div>
				</div>
			`
		}

		// function quickAddCard() {
		// 	cards.forEach(el => {
		// 		if (el != null) {
		// 			switch (el.attributes.for.value) {
		// 				case 'Ranch':
		// 					createCard(ranchText, ranchImg, ranchPrice);
		// 					break;
		// 				case 'Parmesan-&-Romano-Grated-Cheese-Mini-Shaker':
		// 					createCard(parmText, parmImg, parmPrice);
		// 					break;
		// 				case 'Crushed-Red-Pepper-Mini-Shaker':
		// 					createCard(pepperText, pepperImg, pepperPrice);
		// 					break;
		// 				default:
		// 					null;
		// 			}
		// 		}
		// 	});
		// }

		function quickAddCard() {
			for (card of cards) {
				if (card != null) {
					switch (card.attributes.for.value) {
						case 'Ranch':
							document.querySelector('.quick-upsell').insertAdjacentHTML('beforeend', createCard(ranchText, ranchImg, ranchPrice));
							break;
						case 'Parmesan-&-Romano-Grated-Cheese-Mini-Shaker':
							document.querySelector('.quick-upsell').insertAdjacentHTML('beforeend', createCard(parmText, parmImg, parmPrice));
							break;
						case 'Crushed-Red-Pepper-Mini-Shaker':
							document.querySelector('.quick-upsell').insertAdjacentHTML('beforeend', createCard(pepperText, pepperImg, pepperPrice));
							break;
						default:
							null;
					}
				} else {
					null;
				}
			};
		}

    // add new cards on page
		document.querySelector('button[data-testid="secondary-cta-button-add-more-food"]').parentElement.insertAdjacentHTML('afterend', `		
			<div class="quick-upsell">
			</div>
			`);
			
			
		quickAddCard();


		// function to simulate clicks and add items to cart 
		document.querySelectorAll('.quick-upsell__card').forEach(el => {
			el.addEventListener('click', () => {
				switch(el.dataset.product) {
					case 'Ranch':
						ranchCard.closest('div').querySelector('button').click();
						break;
					case 'Parmesan & Romano Grated Cheese Mini Shaker':
						parmCard.closest('div').querySelector('button').click();
						break;
					case 'Crushed Red Pepper Mini Shaker':
						pepperCard.closest('div').querySelector('button').click();
						break;
					default:
						null;
				}
			});
		});
		
		
		function dataSend() {

			// new upsell 1 click atc cards
			document.querySelectorAll('.quick-upsell__card').forEach(el => {
				const cardName = el.querySelector('.quick-upsell__card__details__name p').innerText;
				el.addEventListener('click', (e) => {
					e.push({event:"experiment_event",experimentAction:"click",experimentVariable:`Upsell 1-Click ATC - ${cardName}`});
				});
			});

		}


		// run dataSend
		dataSend();
  

		console.log('CSAB-28 - V1');
		
}



pollCallback(['button[data-testid="secondary-cta-button-add-more-food"]'], function() {
	init();
}, true);

