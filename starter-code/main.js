console.log("JS file is connected to HTML! Woo!")

//var cardOne = "Queen";
//var cardTwo = "Queen";
//var cardThree = "King";
//var cardFour = "King";

/*if (cardTwo === cardFour) {
	alert("You have a match!");
} else {
	alert("That's not a match :(. Try again!");
}*/


var cardsOnBoard = document.getElementById('game-board')

var createCards = function(){

for (var i = 0; i < 4; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	cardsOnBoard.appendChild(card);
}

}

createCards();
