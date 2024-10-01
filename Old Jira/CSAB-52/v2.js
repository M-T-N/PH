// css
document.querySelector('head').insertAdjacentHTML('beforeend', `
	<style>
		.item-list {
			display: grid;
		}
		.item-list[role="heading"] {
			order: 1;
		}
		.item-list div[data-item="meatLoversMelt"]{
			order: 8;
		}
		.item-list div[data-item="breadedBonelessWings"]{
			order: 2;
		}
		.item-list div[data-item="pepperoniLoversMelt"]{
			order: 10;
		}
		.item-list div[data-item="traditionalWings"]{
			order: 3;
		}
		.item-list div[data-item="breadsticks"]{
			order: 5;
		}
		.item-list div[data-item="cinnabon"]{
			order: 6;
		}
		.item-list div[data-item="starry"]{
			order: ;
		}
		.item-list div[data-item="ranch"]{
			order: 4;
		}
		.item-list div[data-item="pepsi"]{
			order: 7;
		}
		.item-list div[data-item="parmeseanCheese"]{
			order: 9;
		}
		.item-list div[data-item="crushedRedPepper"]{
			order: 11;
		}
		.item-list [data-testid="calories-disclaimer"] {
			order: 12;
		}
	</style>
`);

// set parent element, add class name
document.querySelector('h1[role="heading"]').parentElement.classList.add('item-list');


// set item name data attribute
document.querySelector('.item-list div:nth-child(3)').setAttribute('data-item', 'meatLoversMelt');

document.querySelector('.item-list div:nth-child(4)').setAttribute('data-item', 'breadedBonelessWings');

document.querySelector('.item-list div:nth-child(5)').setAttribute('data-item', 'pepperoniLoversMelt');

document.querySelector('.item-list div:nth-child(6)').setAttribute('data-item', 'traditionalWings');

document.querySelector('.item-list div:nth-child(7)').setAttribute('data-item', 'breadsticks');

document.querySelector('.item-list div:nth-child(8)').setAttribute('data-item', 'cinnabon');

document.querySelector('.item-list div:nth-child(9)').setAttribute('data-item', 'starry');

document.querySelector('.item-list div:nth-child(10)').setAttribute('data-item', 'ranch');

document.querySelector('.item-list div:nth-child(12)').setAttribute('data-item', 'pepsi');

document.querySelector('.item-list div:nth-child(13)').setAttribute('data-item', 'parmeseanCheese');

document.querySelector('.item-list div:nth-child(14)').setAttribute('data-item', 'crushedRedPepper');