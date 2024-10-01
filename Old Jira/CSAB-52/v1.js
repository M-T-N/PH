(function(){
  
  function init() {
  
    // vanilla JS
		function getProduct(idName) {
			return document.getElementById(idName).closest('[data-testid]').parentElement;
		}

		function getProductHTML(idName) {
			return document.getElementById(idName).closest('[data-testid]').parentElement.outerHTML;
		}

		const meatLoversMelt = getProduct("Meat-Lover’s®-Melt-label");
		const breadedBonelessWings = getProduct("Breaded-Boneless-Wings-label");
		const pepperoniLoversMelt = getProduct("Pepperoni-Lover’s®-Melt-label");
		const traditionalWings = getProduct("Traditional-Wings-label");
		const breadsticks = getProduct("Breadsticks-label");
		const cinnabon = getProduct("Cinnabon®-Mini-Rolls-label");
		const starry = getProduct("STARRY™-label");
		const ranch = getProduct("Ranch-label");
		const pepsi = getProduct("PEPSI®-label");
		const parmesan = getProduct("Parmesan-&-Romano-Grated-Cheese-Mini-Shaker-label");
		const redPepper = getProduct("Crushed-Red-Pepper-Mini-Shaker-label");




		// jQuery
		var jqry = document.createElement('script');
		jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
		document.getElementsByTagName('head')[0].appendChild(jqry);

		function getProduct(idName) {
			return $(idName).closest('[data-testid]').parent();
		}

		const meatLoversMelt = "#Meat-Lover’s®-Melt-label";
		const breadedBonelessWings = "#Breaded-Boneless-Wings-label";
		const pepperoniLoversMelt = "#Pepperoni-Lover’s®-Melt-label";
		const traditionalWings = "#Traditional-Wings-label";
		const breadsticks = "#Breadsticks-label";
		const cinnabon = "#Cinnabon®-Mini-Rolls-label";
		const starry = "#STARRY™-label";
		const ranch = "#Ranch-label";
		const pepsi = "#PEPSI®-label";
		const parmesan = '[for="Parmesan-&-Romano-Grated-Cheese-Mini-Shaker"]';
		const redPepper = "#Crushed-Red-Pepper-Mini-Shaker-label";

		



		var jqry = document.createElement('script');
		jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
		document.getElementsByTagName('head')[0].appendChild(jqry);

		$('#Meat-Lover’s®-Melt-label, #Breaded-Boneless-Wings-label, #Pepperoni-Lover’s®-Melt-label, #Traditional-Wings-label, #Breadsticks-label, #Cinnabon®-Mini-Rolls-label, #STARRY™-label, #Ranch-label, #PEPSI®-label, [for="Parmesan-&-Romano-Grated-Cheese-Mini-Shaker"], #Crushed-Red-Pepper-Mini-Shaker-label').closest('[data-testid]').parent().wrapAll('<div class="menu-list"/>');

		$('.menu-list').append(breadedBonelessWings, traditionalWings, ranch, cinnabon, pepsi, meatLoversMelt, parmesan, pepperoniLoversMelt, redPepper);


  }
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('SELECTOR', init);

})();



const redPepperClone = redPepper.cloneNode();
const redPepperCloneDeep = redPepper.cloneNode(true);

traditionalWings.insertAdjacentHTML('afterend', redPepperCloneDeep);






var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

$()