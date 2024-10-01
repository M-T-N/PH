!function(){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,o,r,n,l=[],s=!0,d=!1;try{if(r=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;s=!1}else for(;!(s=(a=r.call(i)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(e){d=!0,o=e}finally{try{if(!s&&null!=i.return&&(n=i.return(),Object(n)!==n))return}finally{if(d)throw o}}return l}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var i;if(e)return"string"==typeof e?a(e,t):"Map"===(i="Object"===(i=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function o(i,a,e){function l(e,t){o.set(e,[].concat(d(null!=(e=o.get(e))?e:[]),d(t))),o.size===i.length&&(e=Array.from(o.entries()).sort(function(e,t){return n(e,1)[0]-n(t,1)[0]}).map(function(e){return n(e,2)[1]}),a(e),o.clear())}var s=2<arguments.length&&void 0!==e&&e,o=new Map,r=[];i.forEach(function(e,t){r.push(function(n,t){var i,e=document.querySelectorAll(n);if(e.length&&l(t,Array.from(e)),!e.length||s)return(i=new MutationObserver(function(e){var o=!1,r=[];e.forEach(function(e){for(var t=0,i=Array.from(e.addedNodes);t<i.length;t++){var a=i[t];a.matches&&a.matches(n)&&(r.push(a),o=!s),null!==a&&void 0!==a.querySelectorAll&&a.querySelectorAll(n).length&&(r=[].concat(d(r),d(Array.from(a.querySelectorAll(n)))),o=!s)}}),r.length&&(l(t,r),o)&&i.disconnect()})).observe(document.documentElement,{childList:!0,subtree:!0}),i}(e,t))})}var r=".US-29-homepage-carousel-variation-2 [data-testid='homepage-sidekick-grid']{display:none}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__pagination{display:none;visibility:hidden}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__arrow{background-color:transparent}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__arrow{display:none;visibility:hidden}}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__arrow.splide__arrow--prev{left:-2em}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__arrow.splide__arrow--next{right:-2.3em}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide__inner{padding-block:1rem;padding-inline:3px}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .product{background-color:white;border-radius:6px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.3);border-radius:8px;cursor:pointer}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .product img{border-top-left-radius:8px;border-top-right-radius:8px;width:100%;height:auto}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .product{display:flex;align-items:center;height:88px}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .product img{height:88px;width:76px;object-fit:cover;object-position:center;border-top-right-radius:0;border-top-left-radius:8px;border-bottom-left-radius:8px}}@media (max-width: 540px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .product{height:88px}}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo{display:flex;align-items:center;gap:8px;padding:12px}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__text{flex:1}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__text h4,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__text p{margin:0;font-family:'open_sans', 'sans serif'}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title{color:#131313;font-size:16px;font-style:normal;font-family:'open_sans_semi';font-weight:600;line-height:20px;font-stretch:normal;letter-spacing:normal;text-transform:none}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{color:#131313;font-size:14px;font-style:normal;font-family:open_sans;font-weight:400;line-height:24px;white-space:pre-line;font-stretch:normal;letter-spacing:normal}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo{flex:1}.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{font-size:14px}}@media (max-width: 540px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo{padding-block:0}}@media (max-width: 498px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{text-wrap:nowrap;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:auto;max-width:220px}}@media (max-width: 454px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{max-width:200px}}@media (max-width: 435px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{max-width:175px}}@media (max-width: 408px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{max-width:150px}}@media (max-width: 392px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{max-width:120px}}@media (max-width: 357px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__title,.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__slide .productInfo__sub{max-width:120px}}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide .splide__track{padding-bottom:1rem}}@media (min-width: 768px){.US-29-homepage-carousel-variation-2 #featuresSplide.splide[data-auto-width='false'] .splide__slide .product img{min-height:282px}}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__pagination{display:none;visibility:hidden}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__arrow{background-color:transparent}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__arrow{display:none;visibility:hidden}}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__arrow.splide__arrow--prev{left:-2em}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__arrow.splide__arrow--next{right:-2.3em}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide__inner{padding-block:1rem;padding-inline:3px}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizza{background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.3);border-radius:8px;cursor:pointer;display:flex;align-items:center}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizza img{border-top-left-radius:8px;border-bottom-left-radius:8px}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo{display:flex;align-items:center;gap:8px;padding:12px;flex:1}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__text{flex:1}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__text h4,.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__text p{margin:0;font-family:'open_sans', 'sans serif'}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__title{color:#131313;font-size:16px;font-style:normal;font-family:'open_sans_semi';font-weight:600;line-height:20px;font-stretch:normal;letter-spacing:normal;text-transform:none}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__sub{color:#131313;font-size:14px;font-style:normal;font-family:open_sans;font-weight:400;line-height:24px;white-space:pre-line;font-stretch:normal;letter-spacing:normal}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo{flex:1}.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__title,.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__sub{font-size:14px}}@media (max-width: 540px){.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo{padding-block:0}}@media (max-width: 498px){.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__title,.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__slide .popularPizzaInfo__sub{text-wrap:nowrap;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:auto;max-width:220px}}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #popularPizzasSplide.splide .splide__track{padding-bottom:1rem}}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 #content>div:nth-of-type(2)>div:first-of-type{padding-inline:0}}@media (max-width: 370px){.US-29-homepage-carousel-variation-2 h1:has(~ [data-testid='homepage-sidekick_header_CTA-text']),.US-29-homepage-carousel-variation-2 [data-testid='homepage-pop_pizza_header-text']{font-size:24px;height:auto}}@media (min-width: 768px){.US-29-homepage-carousel-variation-2 #content>div:nth-of-type(2)>div:first-of-type>[role='presentation']>div:empty,.US-29-homepage-carousel-variation-2 #content>div:nth-of-type(2)>div:first-of-type>[role='presentation']+div{border:none;height:0}}@media (max-width: 767.98px){.US-29-homepage-carousel-variation-2 div:has(>[data-testid='homepage-pop_pizza_header-text']),.US-29-homepage-carousel-variation-2 div:has(>[data-testid='homepage-sidekick_header_CTA-text']){margin-bottom:0}}";function l(e){return document.querySelector(e)}function s(e){var t,i="phus29css";l(i)||((t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),t.id=i)}function p(e,t,i){return i?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function e(i){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(i.apply(this,e))}catch(e){return Promise.reject(e)}}}function u(e,t){e=e();return e&&e.then?e.then(t):t(e)}var c=e(function(){return t(),new MutationObserver(function(){document.querySelector("#".concat(v))||t()}).observe(document.body,{childList:!0}),p()}),m=e(function(){return f(),new MutationObserver(function(){document.querySelector("#".concat(g))||f()}).observe(document.head,{childList:!0}),p()}),t=e(function(){var t=localStorage.getItem(_);return u(function(){if(!t&&"/"===window.location.pathname)return p(fetch("https://cdnjs.cloudflare.com/ajax/libs/splidejs/4.1.4/css/splide.min.css"),function(e){return p(e.text(),function(e){t=e,localStorage.setItem(_,t)})})},function(){var e=document.createElement("style");e.id=v,e.innerHTML=t,document.head.appendChild(e)})}),f=e(function(){var t=localStorage.getItem(h);return u(function(){if(!t&&"/"===window.location.pathname)return p(fetch("https://cdnjs.cloudflare.com/ajax/libs/splidejs/4.1.4/js/splide.min.js"),function(e){return p(e.text(),function(e){t=e,localStorage.setItem(h,t)})})},function(){var e=document.createElement("script");e.id=g,e.innerHTML=t,document.head.appendChild(e)})}),h="phus:csab29:script",_="phus:csab29:css",g="csab29-glide-js",v="csab29-glide-styles";function S(e){return null==(e=x.parseFromString('\n<section id="featuresSplide" class="splide">\n\t<div class="splide__arrows">\n\t\t<button class="splide__arrow splide__arrow--prev">\n\t\t\t<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">\n\t\t\t<path fill="#E21216" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>\n\t\t\t</svg>\t\n\t\t</button>\n\t\t<button class="splide__arrow splide__arrow--next">\n\t\t\t<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">\n\t\t\t<path fill="#E21216" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>\n\t\t\t</svg>\t\t\n\t\t</button>\n  </div>\n  <div class="splide__track">\n\t\t<ul class="splide__list">\n\t\t\t'.concat(e.map(function(e){var t;return'<li class="splide__slide" data-cust-id='.concat(e.id,'>\n\t\t\t\t\t\t<div class="splide__slide__inner">\n\t\t\t\t\t\t\t<div class="product">\n\t\t\t\t\t\t\t\t<picture>\n\t\t\t\t\t\t\t\t\t<source media="(min-width:651px)" srcset="').concat(null!=(t=e.desktopSrc)?t:"",'"/>\n\t\t\t\t\t\t\t\t\t<img src="').concat(e.mobileSrc,'" alt="').concat(e.altText,'" />\n\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t<div class="productInfo">\n\t\t\t\t\t\t\t\t\t<div class="productInfo__text">\n\t\t\t\t\t\t\t\t\t\t<h4 class="productInfo__title">').concat(e.title,'</h4>\n\t\t\t\t\t\t\t\t\t\t<p class="productInfo__sub">').concat(e.sub,'</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<svg class="productInfo__chevron" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t\t\t<path d="M0 14.12L6.18084 8L0 1.88L1.90283 0L10 8L1.90283 16L0 14.12Z" fill="#717170"/>\n\t\t\t\t\t\t\t\t\t\t<mask id="mask0_3076_1274" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="16">\n\t\t\t\t\t\t\t\t\t\t<path d="M0 14.12L6.18084 8L0 1.88L1.90283 0L10 8L1.90283 16L0 14.12Z" fill="white"/>\n\t\t\t\t\t\t\t\t\t\t</mask>\n\t\t\t\t\t\t\t\t\t\t<g mask="url(#mask0_3076_1274)">\n\t\t\t\t\t\t\t\t\t\t<rect x="-10.9091" y="24.4706" width="32" height="31.8182" transform="rotate(-90 -10.9091 24.4706)" fill="#131313"/>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t')}).join(""),"\n\t\t</ul>\n  </div>\n</section>\n"),"text/html"))||null==(e=e.body)?void 0:e.firstElementChild}var x=new DOMParser;function w(){var e;return Array.from(null!=(e=null==(e=l('div[data-testid="homepage-sidekick-grid"]'))?void 0:e.children)?e:[])}function b(){var e,t=l('[data-testid="homepage-sidekick-grid"]');console.log("insertionPoint",t),t&&(e=w().map(function(e){var t,i=null==(i=e.querySelector("source"))?void 0:i.getAttribute("srcset"),a=null==(a=e.querySelector("img"))?void 0:a.getAttribute("src"),o=null==(o=e.querySelector("img"))?void 0:o.getAttribute("alt");return{id:null==(t=e.querySelector("a"))?void 0:t.getAttribute("data-testid"),desktopSrc:i,mobileSrc:a,altText:o,title:null==(t=e.querySelector(".MuiCardHeader-title"))?void 0:t.textContent,sub:null==(i=e.querySelector(".MuiCardHeader-subheader"))?void 0:i.textContent}}),e=S(e),null!=t)&&t.insertAdjacentElement("beforebegin",e)}function y(){var a=w().reduce(function(e,t){t=t.querySelector("a[data-testid]");return e[t.getAttribute("data-testid")]=t,e},{});document.querySelectorAll("#featuresSplide .splide__slide").forEach(function(e){var t=e.dataset.custId,i=a[t],t=e.querySelector(".product");"true"!==t.dataset.eventSet&&(null!=t&&t.addEventListener("click",function(){i.click()}),t.dataset.eventSet="true")})}function z(){b(),setTimeout(function(){var e;"true"!==(e=l("#featuresSplide.splide")).dataset.mounted&&(new Splide("#featuresSplide.splide",{type:"loop",perPage:3,perMove:1,gap:"1rem",autoWidth:!1,breakpoints:{996:{perPage:2},767.98:{perPage:1,padding:{right:"12rem"}},531:{padding:{right:"8rem"}},357:{padding:{right:"3rem"}}}}).mount(),e.dataset.mounted="true",e.dataset.autoWidth="false"),y()})}function U(){function e(){var e=new MutationObserver(function(){l("#featuresSplide.splide")||i()}),t=l("#__next");e.observe(t,{subtree:!0,childList:!0})}var i=function(){z()};i(),e()}var I="US-29-homepage-carousel",P=2;var k=function(){var e,t=I,i=P,t="".concat(t,"-variation-").concat(i);console.log("running experiment: "+t),document.body.classList.add(e||t),U()};function A(e,t,i){if(i)return t?t(e()):e();try{var a=Promise.resolve(e());return t?a.then(t):a}catch(e){return Promise.reject(e)}}function L(){}(function t(){var e,i,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;20<a&&"true"!==sessionStorage.getItem("__reloaded")?(sessionStorage.setItem("__reloaded","true"),window.location.reload()):[].includes&&"function"==typeof Promise&&Array.from&&(i=function(){var e=function(e,t){try{var i=e()}catch(e){return t(e)}return i&&i.then?i.then(void 0,t):i}(function(){return console.log("loading files"),A(m,function(){return A(c,function(){s(r),new MutationObserver(function(){document.querySelector("#phus29css")||s(r)}).observe(document.body,{childList:!0}),console.log("files loaded"),setTimeout(function(){if(window.Splide)return k();t(++a)})})})},function(){t(++a)});if(e&&e.then)return e.then(L)},e=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(i.apply(this,e))}catch(e){return Promise.reject(e)}},console.log("initializing PHUS29"),o(['[data-testid="homepage-sidekick-grid"]'],e))})()}()



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
			.splide:not(:first-of-type) {
				display: none;
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
					(window.ph_analytics||[]).push( { event: "experiment_event", experimentAction: "click", experimentVariable: "Homepage Exposed Category (US-809-2) - Wings" });
					ph.route('/menu/wings');
				});
				break;
			case getUrl('Melts'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experimentAction: "click", experimentVariable: "Homepage Exposed Category (US-809-2) - Melts" });
					ph.route('/menu/melts');
				});
				break;
			case getUrl('Pasta'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experimentAction: "click", experimentVariable: "Homepage Exposed Category (US-809-2) - Pasta" });
					ph.route('/menu/pasta');
				});
				break;
			case getUrl('Sides'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experimentAction: "click", experimentVariable: "Homepage Exposed Category (US-809-2) - Sides" });
					ph.route('/menu/sides');
				});
				break;					
			case getUrl('Desserts'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experimentAction: "click", experimentVariable: "Homepage Exposed Category (US-809-2) - Desserts" });
					ph.route('/menu/desserts');
				});
				break;
			case getUrl('Dips'):
				el.addEventListener('click', () => {
					(window.ph_analytics||[]).push( { event: "experiment_event", experimentAction: "click", experimentVariable: "Homepage Exposed Category (US-809-2) - Dips" });
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

