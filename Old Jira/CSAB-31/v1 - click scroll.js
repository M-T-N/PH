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

	document.querySelectorAll('a[data-testid="link-nav-deals"], header > .MuiGrid-root > div[role="navigation"] ul#menu-list-grow li').forEach(el => {console.log(`FIRST LOG - ${el.title}`)});
	//css
	if (!document.querySelector('#CSAB-31-css')) {
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style id="CSAB-31-css">
				div[role="navigation"] {
					opacity: 0;
					pointer-events: none;
				}
				.jss37 {
					margin-bottom: 0;
				}
				.jss62 {
					display: none;
				}
				header {
					border-bottom: none;
				}
				.header__divider {
					width: 100%;
					border-bottom: 1px solid rgb(207, 206, 204);
				}
				.navbar {
					width: 100%;
					height: 60px;
					max-width: 1152px;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					position: relative;
				}
				.navbar__arrow {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 70px;
					position: absolute;
					height: 100%;
					cursor: pointer;
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
				.navbar ul::-webkit-scrollbar {
					display: none;
				}
				.navbar ul li {
					list-style: none;
				}
				.navbar ul li span {
					padding: 15px 10px;
					position: relative;
				}
				.navbar ul li span a {
					font-family: 'open_sans_semi';
					display: inline-block;
					color: #131313;
					text-decoration: none;
				}
				.navbar ul li span .current-page-undeline {
					position: absolute;
					width: 100%;
					display: flex;
					justify-content: center;
				}
				.navbar ul li span .current-page-undeline .active {
					width: calc(100% - 12px);
					box-shadow: 0px -5px 0px #E21216 inset;
					height: 5px;
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
					.jss83 {
						padding-top: 15px;
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


	
	
	function addLinks(){
		console.log('PREPPING LINKS');
		// set all menu items to a map for new html
		const menuItems = new Map();
		document.querySelectorAll('a[data-testid="link-nav-deals"], div[data-testid="nav-menu"] a').forEach((el) =>{
			const itemName = el.title;
			const itemLink = el.href;
			menuItems.set(itemName, itemLink);
			console.log(`PREPPED ${itemName}`);
		});
		
		// loop through map and add as LIs
		const navUL = document.querySelector('.navbar ul');
		navUL.innerHTML = ``;
		for (const [itemName, itemLink] of menuItems) {
			console.log('ADDING LINKS');
			const el = `
						<li>
							<span>
								<a href="${itemLink}">${itemName}</a>
								<div class="current-page-undeline">
									<div></div>
								</div>
							</span>
						</li>
						`;
			navUL.insertAdjacentHTML('beforeend', el);
		}
	}


	if (!document.querySelector('header .navbar')) {
		document.querySelector('header').insertAdjacentHTML('beforeend', `
			<div class="header__divider"></div>
			<div class="navbar">
				<div class="navbar__arrow navbar__arrow-prev">
					<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
				</div>
				<ul>
				</ul>
				<div class="navbar__arrow navbar__arrow-next">
					<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
				</div>				
			</div>
		`);
	}

	// run or re-run adding links
	addLinks();


	// horizontal scroll function
  document.querySelectorAll('.navbar__arrow').forEach(el => {
		// set siblings to reference the <ul>
		let prevSib = el.previousElementSibling;
		let nextSib = el.nextElementSibling;

		// // add right arrow on load on small screens
		if (prevSib != null && prevSib.nodeName == 'UL' && prevSib.offsetWidth < prevSib.scrollWidth) {
			el.classList.add('active');
		 }

		//click left
		if (el.classList.contains('navbar__arrow-prev')) {
			el.addEventListener('click', () => {
					nextSib.scrollBy({
						top: 0,
						left: -100,
						behavior: 'smooth'
					});
					el.parentNode.querySelector('.navbar__arrow-next').classList.add('active');
					setTimeout(() => {
						if (nextSib.scrollLeft == 0) {
							// all the way left
							el.classList.remove('active');
						}
					}, 300)
			});
		}

		// click right
		if (el.classList.contains('navbar__arrow-next')) {
			el.addEventListener('click', () => {
					prevSib.scrollBy({
						top: 0,
						left: +100,
						behavior: 'smooth'
					});
					el.parentNode.querySelector('.navbar__arrow-prev').classList.add('active');
					setTimeout(() => {
						if (prevSib.scrollLeft == prevSib.scrollWidth - prevSib.clientWidth) {
							// all the way right
							el.classList.remove('active');
						}
					}, 300)
			});
		}

	});



	document.querySelectorAll('header > .MuiGrid-root > div[role="navigation"] ul#menu-list-grow li').forEach(el => {
		console.log(`LAST LOG - ${el.title}`);
	});
  
}

pollCallback(['header > .MuiGrid-root > div[role="navigation"]'], function() {
  console.log('CSAB-31 - V1');
	runChanges();
	
}, true);