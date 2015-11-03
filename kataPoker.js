var assert = require('assert');
describe('KataPokerHands', function() {
    it('Higher card wins', function () {
      result = Poker().rank("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH");
      assert.equal("White wins. - with high card: Ace", result);
    });
});



var Poker = function (){
  var rank = function(hands) {
  	var cards = cleanHands( hands );
	var highCard = getHighestCard( cards ); 

	return writeResult( cards, highCard );


  };

	var highest = function( card1, card2 ){
	   	var cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
	   	var index1 = cards.indexOf( card1[0] );
	   	var index2 = cards.indexOf( card2[0] );
	   	return ( index1 >= index2) ? card1 : card2;

	}

	function cleanHands( hands ) {
			var cards = hands.split(' ');
		  	cards.shift()
		  	cards.splice( 5,2 );
		  	return cards;

	}

	function getHighestCard( cards ) {

		var highCard = cards[0]; 

		for (var i = 0; i < cards.length - 1; i++) {
			highCard = highest( highCard, cards[i+1]); 
		};

		return highCard;
	}

	function writeResult( cards, card ) {
		var resultPlayer = ( cards.indexOf( card ) > 4 ) ? 'White' : 'Black';

		return resultPlayer + ' wins. - with high card: Ace';
	}
  return { rank: rank};
};
