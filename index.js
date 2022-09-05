/*   - Every 2 seconds, the counter goes up by 1
  - On click of the image or button, the counter on the page goes up by 1
*/

let snackCounter = 0;
const counterText = document.getElementsByClassName('counter-text')[0];

const snackContainer = document.getElementsByClassName('snack-container')[0];
const wormImage = document.getElementById('worm-image');
const cupcakeImage = document.getElementById('cupcake-image');
const kiwiImage = document.getElementById('kiwi-image');

snackContainer.addEventListener('click', (event) => {
	const element = event.target;
	console.dir(element);

	if (element.tagName === 'IMG') {
		if (element.id === 'worm-image') {
			snackCounter += 1;
			updateSnackCounter;
		} else {
			console.log("That's not DH's favorite snack!");
		}
	}
});

// Every 2 seconds...
setInterval(() => {
	snackCounter += 1;
	updateSnackCounter();
}, 2000);

// to-do
function updateSnackCounter() {}
