// See Sparta courses for the exercise summary
const car = {
  speed: 0,
  totalDistanceBitch: 0,
  distance: 0,

  start: function() {
    this.speed = 0;
    this.totalDistanceBitch = 0;
    this.distance = 0;
    return this;
  },

  changeSpeed: function(value1) {
    this.speed = value1;
    return this;
  },

  showDistance: function() {

    return this.totalDistanceBitch;
  },

  drive: function(minutes) {
    this.totalDistanceBitch += this.speed * minutes/60;
    return this;
  }
};

console.log(car.start().changeSpeed(120).drive(41).showDistance());

module.exports = car;
