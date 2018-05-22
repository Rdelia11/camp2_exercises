class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }
  addFish(fish) {
    this.fishes.push(fish);
  }
  addAlgae(algae) {
    this.algaes.push(algae);
  }
  endTurn() {
    if (this.fishes.length > this.algaes.length){
      this.fishes = this.fishes.slice(this.algaes.length -1, this.fishes.length -1);
      this.algaes.length = 0;
    } else if (this.algaes.length > this.fishes.lenght){
      this.algaes = this.algaes.slice(this.fishes.length-1, this.algaes.length -1);
      this.fishes.length = 0;
    } else {
      this.fishes.length = 0;
      this.algaes.length = 0;
    }
  }
}

class Fish {
  constructor(name, sex, isCarnivorous) {
    this.name = name;
    this.sex = sex;
    this.isCarnivorous = isCarnivorous;
  }
}

class Algae {
  constructor(size) {
    this.size = size;
  }
}


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
