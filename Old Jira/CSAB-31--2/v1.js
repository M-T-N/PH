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

const runChanges = (cachedMenuItemsHtml) => {

	//css
	if (!document.querySelector('#CSAB-31-css')) {
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style id="CSAB-31-css">
				div[role="navigation"] {
					opacity: 0;
					pointer-events: none;
					width: 0;
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
					z-index: 10;
				}
				.navbar__arrow svg {
					margin: 0;
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
					padding: 0 15px;
					gap: 25px;
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
					display: flex;
    			align-items: center;
				}
				.navbar ul li span a {
					font-family: 'open_sans_semi';
					display: inline-block;
					color: #131313;
					text-decoration: none;
				}
				.navbar ul li span a.active {
					box-shadow: 0px -5px 0px #E21216 inset;
					padding: 0 2px 3px;
				}
				.navbar ul li span .current-page-underline {
					position: absolute;
					width: 100%;
					display: flex;
					justify-content: center;
				}
				.navbar ul li span .current-page-underline.active div {
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
					.jss265 {
						display: block !important;
						overflow: hidden;
						flex-grow: 1;
					}
					.jss244 {
						cursor: pointer;
						margin: auto 8px auto 5px !important;
						display: flex !important;
						padding: 8px 0 8px 0;
						overflow: hidden;
					}
					.jss240 {
						justify-content: flex-start !important;
					}
					.jss241 {
						margin: 0 !important;
						flex-direction: column !important;
						align-items: flex-start !important;
						white-space: nowrap;
    				max-width: 100%;
					}
					.jss241 > .MuiGrid-container {
						gap: 4px;
					}
					.jss242 {
						line-height: 1 !important;
					}
					.jss243 {
						margin: 0 !important;
						border: none !important;
						padding: 0 !important;
						line-height: 1 !important;
					}
					.jss247 {
						margin: 0 !important;
					}
					.jss248 {
						display: none;
					}
					.jss267 {
						display: none;
					}
					.jss290 {
						padding-top: 20px;
					}
					.jss210 {
						flex-wrap: nowrap !important;
					}
					.jss211 {
						display: none !important;
					}
					.jss243 {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						max-width: 100%;
					}
					.jss249 {
						margin-right: 10px !important;
					}
					.jss235 {
						text-wrap: nowrap;
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

  const navbarHtml = `
		<div class="navbar">
			<div class="navbar__arrow navbar__arrow-prev">
				<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
			</div>
			<ul>
			${cachedMenuItemsHtml}
			</ul>
			<div class="navbar__arrow navbar__arrow-next ${(function isMobile(){ if (window.innerWidth < 851){return "active"} })()}">
				<svg class="MuiSvgIcon-root jss122 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
			</div>
		</div>
	`;

	// add new navbar
	if (!document.querySelector('header .navbar')) {
		document.querySelector('header').insertAdjacentHTML('beforeend', `
			<div class="header__divider"></div>
      ${navbarHtml}`);
	} else {
    document.querySelector('header .navbar').outerHTML = navbarHtml;
  }

	// underline menu item of current page
	const href = window.location.href;
	const checkURL = subdirectory => {
		if (href.includes(subdirectory)) {
			return href;
		}
	}

	const underlineMenu = (term) => {
		document.querySelectorAll('.navbar li a').forEach(el => {
			if (el.innerText == term) {
				el.classList.add('active');
			}
		});
	}

	switch (href) {
		case checkURL('/deals'):
			underlineMenu('Deals');
			break;
		case checkURL('/pizza'):
			underlineMenu('Pizza');
			break;
		case checkURL('/wings'):
			underlineMenu('Wings');
			break;
		case checkURL('/sides'):
			underlineMenu('Sides');
			break;
		case checkURL('/pasta'):
			underlineMenu('Pasta');
			break;
		case checkURL('/desserts'):
			underlineMenu('Desserts');
			break;
		case checkURL('/drinks'):
			underlineMenu('Drinks');
			break;
		case checkURL('/salads'):
			underlineMenu('Salads');
			break;
		case checkURL('/dips'):
			underlineMenu('Dips');
			break;
	}


	
	let list = document.querySelector('.navbar ul');
	let isDown = false;
	let startX, scrollLeft;

	list.addEventListener('touchstart', (e) => {
		//e.preventDefault();
		isDown = true;
		startX = e.pageX - list.offsetLeft;
		scrollLeft = list.scrollLeft;
	});

	list.addEventListener('touchcancel', () => {
		isDown = false;
	});

	list.addEventListener('touchend', () => {
		isDown = false;
	});

	list.addEventListener('touchmove', (e) => {
		if(!isDown) return; // stop func from running
		// e.preventDefault();
		// const x = e.pageX - list.offsetLeft;
		// const walk = x - startX;
		// list.scrollLeft = scrollLeft - walk;

		/** add and remove arrows depeding on scroll position **/

		//fully right - show right arrow, hide left arrow
		if (list.scrollLeft < 20) {
			list.previousElementSibling.classList.remove('active');
			list.nextElementSibling.classList.add('active');
			console.log('-left +RIGHT');
		}
		// in between - show both arrows
		if (list.scrollLeft != 0 && list.scrollLeft != (list.scrollWidth - list.clientWidth)) {
			list.previousElementSibling.classList.add('active');
			list.nextElementSibling.classList.add('active');
			console.log('Between');
		} 
		// fully left - show left arrow, hide right arrow
		if (list.scrollLeft > (list.scrollWidth - list.clientWidth - 20)) {
			list.previousElementSibling.classList.add('active');
			list.nextElementSibling.classList.remove('active');
			console.log('+LEFT -right');
		}
	});


	// // horizontal scroll function
  document.querySelectorAll('.navbar__arrow').forEach(el => {
		// set siblings to reference the <ul>
		let prevSib = el.previousElementSibling;
		let nextSib = el.nextElementSibling;

		// // add right arrow on load on small screens
		// if (prevSib != null && prevSib.nodeName == 'UL' && prevSib.offsetWidth < prevSib.scrollWidth) {
		// 	el.classList.add('active');
		//  }

	// 	//click left
		if (el.classList.contains('navbar__arrow-prev')) {
			el.addEventListener('click', () => {
					nextSib.scrollBy({
						top: 0,
						left: -150,
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

	// 	// click right
		if (el.classList.contains('navbar__arrow-next')) {
			el.addEventListener('click', () => {
					prevSib.scrollBy({
						top: 0,
						left: +150,
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

}

function initTest(cachedMenuItemsHtml) {
  pollCallback(['header > .MuiGrid-root > div[role="navigation"]'], function() {
    runChanges(cachedMenuItemsHtml);
  }, true);
}

pollCallback(['header > .MuiGrid-root > div[role="navigation"]'], function() {
  function getLinksMarkup() {
    const menuItems = new Map();

    document.querySelectorAll('a[data-testid="link-nav-deals"], div[data-testid="nav-menu"] a').forEach((el, i) =>{
      const itemName = el.title;
      const itemLink = el.href;
      menuItems.set(itemName, itemLink);
      console.log(`PREPPED ${itemName}`);
    });

    console.log({ menuItems }, menuItems.size, '== MENU ITEMS ==');

    return Array.from(menuItems).map(([itemName, itemLink]) => `
      <li>
        <span>
          <a href="${itemLink}">${itemName}</a>
        </span>
      </li>
      `).join('');
  }

  console.log('== CSAB-31 ==');
	initTest(getLinksMarkup());
});
