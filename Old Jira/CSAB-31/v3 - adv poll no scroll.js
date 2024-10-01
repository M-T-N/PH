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
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
      });
    },
  };
}
     


pollCallback(['header'], function(){

  console.log('CSAB-31');

		//css
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style>
				@media (max-width: 960px) {
					.navbar ul {
						justify-content: left;
						gap: 25px;
					}
				}
				.navbar {
					width: 100%;
					display: flex;
					justify-content: center;
					background: #131313;
				}
				.navbar ul {
					display: flex;
					justify-content: space-between;
					padding: 0;
					width: 100%;
					max-width: 1050px;
					margin: 0;
					overflow-x: auto;
				}
				.navbar ul::-webkit-scrollbar {
					display: none;
				}
				.navbar ul li {
					list-style: none;
				}
				.navbar ul li a {
					display: inline-block;
					color: white;
					text-decoration: none;
					padding: 15px 20px;
				}
				.navbar ul li a:hover {
					background: #E21216;
				}
			</style>
			`);
  
    // new list html
		document.querySelector('header').insertAdjacentHTML('afterend', `
			<div class="navbar">
				<ul>
					<li>
						<a href="https://www.pizzahut.com/deals">
							Deals
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/pizza">
							Pizza
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/deals?id=MELTSALL">
							Melts
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/wings">
							Wings
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/sides">
							Sides
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/pasta">
							Pasta
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/desserts">
							Desserts
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/drinks">
							Drinks
						</a>
					</li>
					<li>
						<a href="https://www.pizzahut.com/menu/dips">
							Dips
						</a>
					</li>	
				</ul>
			</div>	
		`);



		// horizontal scroll function
		/*
		const slider = document.querySelector('.navbar ul');
		let isDown = false;
		let startX, scrollLeft;

		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});

		slider.addEventListener('mouseleave', () => {
			isDown = false;
		});

		slider.addEventListener('mouseup', () => {
			isDown = false;
		});

		slider.addEventListener('mousemove', (e) => {
			if(!isDown) return; // stop func from running
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = x - startX;
			slider.scrollLeft = scrollLeft - walk;
		});
		*/
                        
                        
  },
  true
);