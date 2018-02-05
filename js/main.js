console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push("queen");
console.log("User flipped " + cardOne);
cardsInPlay.push("king");
console.log("User flipped " + cardTwo);
if (cardsInPlay[0] === cardsInPlay[2]) {
alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
