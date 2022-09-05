/*   - Every 2 seconds, the counter goes up by 1
  - On click of the image or button, the counter on the page goes up by 1
*/

const snackContainer = document.getElementsByClassName('snack-container')[0];
const donationMessage = document.getElementsByClassName('donation-message')[0];

snackContainer.addEventListener('click', (event) => {
	const element = event.target;
	if (element.tagName === 'IMG') {
		if (element.id === 'worm-image') {
			updateTotalSnackCounter(1);
			updateYourSnackCounter(1);
			donationMessage.innerHTML = 'Thank you for your worm snack donation!';
		} else if (element.id === 'worms-image') {
			updateTotalSnackCounter(10);
			updateYourSnackCounter(10);
			donationMessage.innerHTML =
				'WOW! Thank you so much for you generous donation of ten worms!';
		} else {
			donationMessage.innerHTML =
				"That's not DH's favorite snack! Try again...";
		}
	}
});

let totalSnacks = 0;
let yourSnacks = 0;

// Every 2 seconds...
setInterval(() => {
	updateTotalSnackCounter(1);
}, 2000);

function updateTotalSnackCounter(num) {
	totalSnacks += num;
	const counterText = document.getElementsByClassName(
		'total-snacks-counter-text'
	)[0];
	counterText.innerHTML = `Total Snacks received: ${totalSnacks}`;
	if (!easterEggUnlocked) checkEasterEgg();
}

function updateYourSnackCounter(num) {
	yourSnacks += num;
	const counterText = document.getElementsByClassName(
		'your-snacks-counter-text'
	)[0];

	counterText.innerHTML = `Snacks you've donated: ${yourSnacks}`;
}

// Easter Egg
let easterEggUnlocked = false;
function checkEasterEgg() {
	if (totalSnacks >= 20) {
		donationMessage.innerHTML =
			'DH has recieved over 20 Snacks! Glowing background unlocked!';
		donationMessage.style.color = 'red';
		rainbowBG();
		easterEggUnlocked = true;
	}
}

function rainbowBG() {
	let colorCounter = 1;
	setInterval(() => {
		const color = `
				hsl(${colorCounter % 255}, 
				100%,
				90%
			)`;
		document.body.style.backgroundColor = color;
		colorCounter += 1;
	}, 10);
}
