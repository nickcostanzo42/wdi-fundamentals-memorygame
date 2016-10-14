var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

/*if (cardTwo === cardFour) {
	alert("You have a match!");
} else {
	alert("That's not a match :(. Try again!");
}*/


var board = document.getElementById('game-board');

function createBoard(){

for (var i = 0; i < cards.length; i++) {

	var cardElement = document.createElement('div');

	cardElement.className = 'card';

	cardElement.setAttribute('data-card', cards[i]);

	cardElement.addEventListener('click', isTwoCards);

	board.appendChild(cardElement);
	board.appendChild(cardElement);
	}

}

function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = "<img src = 'king.png'>";
	} else {
		this.innerHTML = "<img src = 'queen.png'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cards[0].innerHTML = "<img src = '#'>";
		cards[1].innerHTML = "<img src = '#'>";
		cardsInPlay = [];
	}
};

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

createBoard();
