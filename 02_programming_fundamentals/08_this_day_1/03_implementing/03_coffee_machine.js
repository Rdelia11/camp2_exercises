// See Sparta courses for the exercise summary

const machine {
    LiterOfCoffe: 10,
    kexpresso: 0.08,
    klongCoffe: 0.15,

    fillWithLitersOfCoffee: function(numberOfliters) {
      this.LiterOfCoffe += numberOfliters;
    },

    expresso: function() {
      if (this.LiterOfCoffe < 0,08) {
        return false;
      }
      this.litersOfCoffee -= 0,8;
      return true;
    },

    longCoffee: function() {
      if (this.litersOfCoffe < 0,15) {
        return false;
      }
      this.litersOfCoffe -= 0,15;
      return true;
    },
  }};

  machine.fillWithLitersOfCoffee(10);
  console.log(machine.expresso()) // => true
  console.log(machine.litersOfCoffee) // => 9.92
  console.log(machine.longCoffee()) // => true
  console.log(machine.litersOfCoffee) // => 9.77
  // some more people ordering coffee here
  console.log(machine.litersOfCoffee) // => 0.02
  console.log(machine.expresso()) // => false

  module.exports = machine;

  /*
  Correction
  const machine = {

  litersOfCoffee: 0 ,
  expressoVolume: 0.08 ,
  longCoffeeVolume: 0.15 ,


  fillWithLitersOfCoffee : function (quantityOfCoffee){
    this.litersOfCoffee = this.litersOfCoffee + quantityOfCoffee;
    //this.litersOfCoffee += quantityOfCoffee;
    return this;
  },
  expresso : function (){
    if (this.litersOfCoffee >= this.expressoVolume) {
      this.litersOfCoffee = this.litersOfCoffee - this.expressoVolume;
      //this.litersOfCoffee -= this.expressoVolume;
      return true;
    } else {
      return false;
    }

  },
  longCoffee : function (){
    if (this.litersOfCoffee >= this.longCoffeeVolume) {
      this.litersOfCoffee = this.litersOfCoffee - this.longCoffeeVolume;
      //this.litersOfCoffee -= this.longCoffeeVolume;
      return true;
    } else {
      return false;
    }

  },

};




machine.fillWithLitersOfCoffee(10);



console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
