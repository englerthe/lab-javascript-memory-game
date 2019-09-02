class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let newCards = [];
    while (this.cards.length !==0) {
      let randomIndex = Math.floor(Math.random() * this.cards.length); // Zufallszahl (0,1) * Länge des arrays - abgerundet
      newCards.push(cards[randomIndex]); // der ermittelte Wert wird in das neue Array angehängt 
      this.cards.splice(randomIndex, 1); // der ermittelte Wert wird aus dem card Array entfernt
    }
    this.cards = newCards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    this.pickedCards = [card1, card2];
    if (this.pickedCards[0].getAttribute("name") === this.pickedCards[1].getAttribute("name")) {
      this.pairsGuessed +=1;
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.pairsClicked < 1) {
      return false;
    } else if (this.pairsGuessed < this.cards.length/2) {
      return false;
    } 
    return true;
  }

  cardClicked(card) {
    card.className = "front";
    card.parentNode.childNodes[1].className = "back";
    this.pickedCards.push(card); 
    if (this.pickedCards.length == 2) {
      if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1]) == false ) {
      console.log(this.pickedCards);  
        this.flipCardsBack();
        //this.performTimeout();
      } else {  
      this.pickedCards = [];
      console.log(this.pairsGuessed);  
      }
    }
  }

  flipCardsBack() {
    setTimeout( () => {
    console.log(this.pickedCards);
    this.pickedCards[0].className = "back";
    this.pickedCards[0].parentNode.childNodes[1].className = "front";
    this.pickedCards[1].className = "back";
    this.pickedCards[1].parentNode.childNodes[1].className = "front";
    this.pickedCards = [];
    }, 1500)
  } 
};