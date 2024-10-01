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
  
	// load slick slider css
	document.querySelector('head').insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>');

	// load jQuery
	var jqry = document.createElement('script');
	jqry.src = "https://code.jquery.com/jquery-1.11.0.min.js";
	document.getElementsByTagName('head')[0].appendChild(jqry);

	// load slickSlider
	var slickSlider = document.createElement('script');
	slickSlider.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
	document.getElementsByTagName('head')[0].appendChild(slickSlider);


	// setup html to the slider
	document.querySelector('[data-testid="homepage-sidekick-grid"]').innerHTML = `<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4"><a data-testid="homepage-sidekick_0-link" title="$10.99 Tastemaker™" class="jss320" tabindex="0" data-analytics-category="sidekicks" data-analytics-action="sidekick_0" role="button" aria-haspopup="false"><div class="MuiPaper-root MuiCard-root jss321 MuiPaper-elevation1 MuiPaper-rounded" data-testid="homepage-sidekick_0-image"><div class="jss264"><div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center" data-testid="mobile-sidekick"><div class="MuiGrid-root jss322 MuiGrid-item MuiGrid-grid-xs-3"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_1099Tastemaker_SmallDesktop_352x282.jpg" data-testid="sidekick-picture-source_0"><img alt="$10.99 Tastemaker™" title="$10.99 Tastemaker™" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_1099Tastemaker_SmallMobile_172x210.jpg" loading="lazy"></picture></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9"><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">$10.99 Tastemaker™</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Large up to 3 toppings</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="$10.99 Tastemaker™: Large up to 3 toppings. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div><div class="jss262"><div data-testid="desktop-sidekick"><div class="MuiGrid-root jss325 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_1099Tastemaker_SmallDesktop_352x282.jpg" data-testid="sidekick-picture-source_0"><img alt="$10.99 Tastemaker™" title="$10.99 Tastemaker™" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_1099Tastemaker_SmallMobile_172x210.jpg" loading="lazy"></picture></div><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">$10.99 Tastemaker™</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Large up to 3 toppings</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="$10.99 Tastemaker™: Large up to 3 toppings. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4"><a data-testid="link-homepage-sidekick_1-link" title="Local Deals" class="jss320" tabindex="0" data-analytics-category="sidekicks" data-analytics-action="sidekick_1" role="button" aria-haspopup="false" href="/deals"><div class="MuiPaper-root MuiCard-root jss321 MuiPaper-elevation1 MuiPaper-rounded" data-testid="homepage-sidekick_1-image"><div class="jss264"><div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center" data-testid="mobile-sidekick"><div class="MuiGrid-root jss322 MuiGrid-item MuiGrid-grid-xs-3"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_Localdeals_SmallDesktop_352x282_v2.png" data-testid="sidekick-picture-source_1"><img alt="Local Deals" title="Local Deals" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_Localdeals_SmallMobile_172x210_v2.png" loading="lazy"></picture></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9"><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">Local Deals</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Delivery or carryout</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="Local Deals: Delivery or carryout. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div><div class="jss262"><div data-testid="desktop-sidekick"><div class="MuiGrid-root jss325 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_Localdeals_SmallDesktop_352x282_v2.png" data-testid="sidekick-picture-source_1"><img alt="Local Deals" title="Local Deals" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_Localdeals_SmallMobile_172x210_v2.png" loading="lazy"></picture></div><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">Local Deals</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Delivery or carryout</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="Local Deals: Delivery or carryout. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4"><a data-testid="homepage-sidekick_2-link" title="$7 Deal Lover's" class="jss320" tabindex="0" data-analytics-category="sidekicks" data-analytics-action="sidekick_2" href="https://www.pizzahut.com/lineup" aria-haspopup="false"><div class="MuiPaper-root MuiCard-root jss321 MuiPaper-elevation1 MuiPaper-rounded" data-testid="homepage-sidekick_2-image"><div class="jss264"><div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center" data-testid="mobile-sidekick"><div class="MuiGrid-root jss322 MuiGrid-item MuiGrid-grid-xs-3"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Startingat_Value_SKs_V2_352x282.jpg" data-testid="sidekick-picture-source_2"><img alt="$7 Deal Lover's" title="$7 Deal Lover's" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/deallovertest2.jpg" loading="lazy"></picture></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9"><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">$7 Deal Lover's</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Delivery or carryout</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="$7 Deal Lover's: Delivery or carryout. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div><div class="jss262"><div data-testid="desktop-sidekick"><div class="MuiGrid-root jss325 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Startingat_Value_SKs_V2_352x282.jpg" data-testid="sidekick-picture-source_2"><img alt="$7 Deal Lover's" title="$7 Deal Lover's" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/deallovertest2.jpg" loading="lazy"></picture></div><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">$7 Deal Lover's</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Delivery or carryout</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="$7 Deal Lover's: Delivery or carryout. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4"><a data-testid="homepage-sidekick_3-link" title="Big Dinner Box. Click to order now." class="jss320" tabindex="0" data-analytics-category="sidekicks" data-analytics-action="sidekick_3" role="button" aria-haspopup="false"><div class="MuiPaper-root MuiCard-root jss321 MuiPaper-elevation1 MuiPaper-rounded" data-testid="homepage-sidekick_3-image"><div class="jss264"><div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center" data-testid="mobile-sidekick"><div class="MuiGrid-root jss322 MuiGrid-item MuiGrid-grid-xs-3"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_BDB_LargeDesktop_541x282_v2.jpg" data-testid="sidekick-picture-source_3"><img alt="Big Dinner Box. Click to order now." title="Big Dinner Box. Click to order now." class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_BDB_SmallMobile_172x210_v2.jpg" loading="lazy"></picture></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9"><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">Big Dinner Box</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Feed the whole family, all from one box.</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="Big Dinner Box: Feed the whole family, all from one box.. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div><div class="jss262"><div data-testid="desktop-sidekick"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_BDB_LargeDesktop_541x282_v2.jpg" data-testid="sidekick-picture-source_3"><img alt="Big Dinner Box. Click to order now." title="Big Dinner Box. Click to order now." class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_BDB_SmallMobile_172x210_v2.jpg" loading="lazy"></picture></div><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">Big Dinner Box</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Feed the whole family, all from one box.</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="Big Dinner Box: Feed the whole family, all from one box.. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4"><a data-testid="homepage-sidekick_4-link" title="Wing Wednesday" class="jss320" tabindex="0" data-analytics-category="sidekicks" data-analytics-action="sidekick_4" role="button" aria-haspopup="false"><div class="MuiPaper-root MuiCard-root jss321 MuiPaper-elevation1 MuiPaper-rounded" data-testid="homepage-sidekick_4-image"><div class="jss264"><div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center" data-testid="mobile-sidekick"><div class="MuiGrid-root jss322 MuiGrid-item MuiGrid-grid-xs-3"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_WingWednesday_LargeDesktop_541x282_v5.jpg" data-testid="sidekick-picture-source_4"><img alt="Wing Wednesday " title="Wing Wednesday " class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_WingWednesday_SmallMobile_172x210_v5.jpg" loading="lazy"></picture></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9"><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">Wing Wednesday</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Sauced, tossed, delivered</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="Wing Wednesday: Sauced, tossed, delivered. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div><div class="jss262"><div data-testid="desktop-sidekick"><div class="MuiGrid-root jss326 MuiGrid-item" aria-hidden="true"><picture class="jss323"><source media="(min-width:651px)" srcset="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_WingWednesday_LargeDesktop_541x282_v5.jpg" data-testid="sidekick-picture-source_4"><img alt="Wing Wednesday " title="Wing Wednesday" class="jss324" src="https://www.pizzahut.com/assets/w/images/homepage_deal/Sidekick_WingWednesday_SmallMobile_172x210_v5.jpg" loading="lazy"></picture></div><div class="MuiCardHeader-root"><div class="MuiCardHeader-content"><span class="MuiTypography-root MuiCardHeader-title jss330 MuiTypography-h5 MuiTypography-displayBlock"><span aria-hidden="true">Wing Wednesday</span></span><span class="MuiTypography-root MuiCardHeader-subheader MuiTypography-body1 MuiTypography-colorTextSecondary MuiTypography-displayBlock"><p aria-hidden="true" class="jss331"><span aria-hidden="true">Sauced, tossed, delivered</span></p></span></div><div class="MuiCardHeader-action jss332"><button class="MuiButtonBase-root MuiIconButton-root jss333" tabindex="-1" type="button" aria-label="Wing Wednesday: Sauced, tossed, delivered. . Click to order."><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root jss329 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></span></button></div></div></div></div></div></a></div>`;

	// run slickSlider script
	setTimeout(function(){
		$('[data-testid="homepage-sidekick-grid"]').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
		});
	}, 1000)


}



pollCallback(['[data-testid="homepage-sidekick-grid"]'], function() {
	init();

  //mutationObserver for target element if needed
	// const observer = new MutationObserver(init);
	// observer.observe(document.querySelector('theElement'), {childList: true, subtree: true });
}, true);

