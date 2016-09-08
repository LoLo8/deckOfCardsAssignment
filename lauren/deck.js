ffunction Stack(){
  this.cards          = New Array();
  this.makeDeck   = stackMakeDeck;
  this.shuffle        = stackShuffle;
  this.deal            = stackDeal;
  this.draw           = stackDraw;
  this.addCard      = stackAddCard;
  this.combine      = stackCombine;
  this.cardCount    = stackCardCount;
}

// building the deck of cards
function stackMakeDeck(n) {
  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
  var suits  =  new Array();
  var i, j, k;
  var m;

  m = ranks.length * suits.length;

  this.cards = new Array( n * m);

  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < ranks.length; k++)
        this.cards[ i * m + j * ranks.length + k ] =
          new Card ( ranks[k]), suits[j]);

}

//shuffle stackDraw

function stackShuffle(n){
  var i, j, k;
  var temp;

  for (i =0; i < n, i ++)
    for (j = 0; j <this.cards.length; j ++){
      k= Math.flor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}

//deal cards

function stackDraw(n) {
  var card;
  if (n >= 0 && n < this.cards.length) {
    card = this.cards[n];
    this.cards.splice(n,1);
  }
  else
    card = null;

    return card;
}

// count cards

function stackCardCount() {
  this.cards.push(card);
}

// adding cards to stack

function stackAddCard(card){
  this.cards.push(card);
}

  var deck = new Stack();
  var hand =  new Stack();
  var i;

  deck.makeDeck(1);
  for ( i = 0; i < 5; i++)
    hand.addCard(deck.deal());

  // combine stacks

function stackCombine(stack){
  this.cards =  this.cards.concat(stack.cards);
  stack.cards = new Array();
}
  stack1.combine(stack2);
