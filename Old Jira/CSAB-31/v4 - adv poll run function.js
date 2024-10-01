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

const runChanges = () => {
	// exit if the test component already exists
	//if (document.querySelector('header .navbar__desktop') && document.querySelector('header .navbar__mobile')) return;
	// if (document.querySelector('header .navbar__desktop')) return;

	//css
	if (!document.querySelector('#CSAB-31-css')) {
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style id="CSAB-31-css">
				.jss62 {
					display: none;
				}
				header {
					border-bottom: none;
				}
				header > .MuiGrid-root {
					border-bottom: 1px solid rgb(207, 206, 204);
				}
				.navbar {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					cursor: grab;
					position: relative;
				}
				.navbar__desktop {
					display: none;
				}
				.navbar__mobile {
					height: 60px;
				}
				.navbar__arrow {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 70px;
					position: absolute;
					height: 100%;
				}
				.navbar__arrow-prev {    
					left: 0;
					background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%);
					justify-content: flex-start;
					padding-left: 10px;
					display: none;
				}
				.navbar__arrow-prev.active {
					display: flex;
				}
				.navbar__arrow-prev svg {
					transform: rotate(180deg);
				}
				.navbar__arrow-next {
					right: 0;
					background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%);
					justify-content: flex-end;
					padding-right: 10px;
					display: none;
				}
				.navbar__arrow-next.active {
					display: flex;
				}
				.navbar ul {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0;
					gap: 15px;
					width: 100%;
					max-width: 1050px;
					margin: 0;
					overflow-x: auto;
				}
				/*
				.navbar::after {
					background-image: url(//cdn.optimizely.com/img/19558781057/330782c….png);
					background-color: #fffff90;
					background-position: center;
					position: absolute;
					right: 0px;
					top: 0px;
					height: 100%;
					width: 70px;
					display: block;
					content: "";
					background-repeat: no-repeat;
				}
				*/
				.navbar ul::-webkit-scrollbar {
					display: none;
				}
				.navbar ul li {
					list-style: none;
				}
				.navbar ul li span {
					padding: 15px;
				}
				.navbar ul li span a {
					font-family: 'open_sans_semi';
					display: inline-block;
					color: #131313;
					text-decoration: none;
				}
				@media (max-width: 850.95px) {
					.jss60 {
						display: block !important;
					}
					.jss60 .jss39 > svg {
						display: none;
					}
					.jss60 .jss36 {
						flex-direction: column;
					}
					.jss60 .jss36 .MuiSvgIcon-root {
						line-height: 1;
						margin-bottom: 2px;
					}
					.jss60 .jss38 {
						padding-left: 0;
						margin-bottom: 0;
						border: none;
					}
				}
				@media (min-width: 851px) {
					.jss5 {
						flex-wrap: nowrap !important;
						overflow: hidden;
					}
					.jss6 {
						overflow-x: auto;
					}
					.jss17 {
						text-wrap: nowrap;
					}
					.jss24 {
						margin-right: 20px;
					}
					.jss28 {
						text-wrap: nowrap;
					}
					.jss36 {
						text-wrap: nowrap;
					}
					.jss44 {
						margin-right: 15px !important;
					}
					.jss60 {
						margin-left: 20px;
					}
					.navbar__mobile {
						display: none;
					}
					.navbar__desktop {
						display: flex;
					}
					.navbar ul {
						justify-content: space-between;
					}
				}
			</style>
		`);
	}



	// new list html for desktop
	if (!document.querySelector('header .navbar__desktop')) {
		document.querySelector('header > .MuiGrid-root > div[role="navigation"]').innerHTML = `
			<div class="navbar navbar__desktop">
				<div class="navbar__arrow navbar__arrow-prev">
					<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
				</div>
				<ul>
					<li>
						<span>
							<a href="https://www.pizzahut.com/deals">
								Deals
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/pizza">
								Pizza
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/deals?id=MELTSALL">
								Melts
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/wings">
								Wings
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/sides">
								Sides
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/pasta">
								Pasta
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/desserts">
								Desserts
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/drinks">
								Drinks
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/dips">
								Dips
							</a>
						</span>
					</li>
				</ul>
				<div class="navbar__arrow navbar__arrow-next active">
					<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
				</div>
			</div>
		`;
	}


	if (!document.querySelector('header .navbar__mobile')) {
		// new list html for mobile
		document.querySelector('header').insertAdjacentHTML('beforeend', `
			<div class="navbar navbar__mobile active">
				<div class="navbar__arrow navbar__arrow-prev">
					<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
				</div>
				<ul>
					<li>
						<span>
							<a href="https://www.pizzahut.com/deals">
								Deals
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/pizza">
								Pizza
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/deals?id=MELTSALL">
								Melts
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/wings">
								Wings
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/sides">
								Sides
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/pasta">
								Pasta
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/desserts">
								Desserts
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/drinks">
								Drinks
							</a>
						</span>
					</li>
					<li>
						<span>
							<a href="https://www.pizzahut.com/menu/dips">
								Dips
							</a>
						</span>
					</li>
				</ul>
				<div class="navbar__arrow navbar__arrow-next active">
					<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
				</div>				
			</div>
		`);
	}



	// horizontal scroll function
  
	document.querySelectorAll('.navbar ul').forEach(el => {
		let isDown = false;
		let startX, scrollLeft;
	
		el.addEventListener('mousedown', (e) => {
			isDown = true;
			startX = e.pageX - el.offsetLeft;
			scrollLeft = el.scrollLeft;
		});
	
		el.addEventListener('mouseleave', () => {
			isDown = false;
		});
	
		el.addEventListener('mouseup', () => {
			isDown = false;
		});
	
		el.addEventListener('mousemove', (e) => {
			if(!isDown) return; // stop func from running
			e.preventDefault();
			const x = e.pageX - el.offsetLeft;
			const walk = x - startX;
			el.scrollLeft = scrollLeft - walk;

			/** add and remove arrows depeding on scroll position **/
			// fully right
			if (el.scrollLeft == 0) {
				el.previousElementSibling.classList.remove('active');
				el.nextElementSibling.classList.add('active');
			}
			// in between
			if (el.scrollLeft != 0 && el.scrollLeft != (el.scrollWidth - el.clientWidth)) {
				el.previousElementSibling.classList.add('active');
				el.nextElementSibling.classList.add('active');
			} 
			// fully left
			if (el.scrollLeft == (el.scrollWidth - el.clientWidth)) {
				el.previousElementSibling.classList.add('active');
				el.nextElementSibling.classList.remove('active');
			}
		});
	});
  
}

pollCallback(['header > .MuiGrid-root > div[role="navigation"]'], function() {
  console.log('CSAB-31');
	runChanges();

	// const observer = new MutationObserver(runChanges);
	const observer = new MutationObserver(mutations => {
		mutations.forEach(function (mutation) {
			console.log(mutation);
			console.log('RUNNING M.O.');
			runChanges();
		});
	});
	observer.observe(document.querySelector('header > .MuiGrid-root > div[role="navigation"]'), {childList: true, subtree: true });
}, true);