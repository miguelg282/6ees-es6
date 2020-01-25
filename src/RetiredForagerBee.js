class RetiredForagerBee extends ForagerBee {
  // TODO..
   constructor(){
    super();
    this.age = 40;
    this.color = 'grey';
    this.job = 'gamble';
    // this.honeyPot = 0;
    this.canFly = false;
    // this.treasureChest = [];
  }
  forage() {
    return "I am too old, let me play cards instead";
  }

  gamble(val) {
    this.treasureChest.push(val)
  }
};
