// Add a function `introduceMyself` which takes no arguments and return a little introductory sentence
//
// Example
//
// person.introduceMyself() # => "Hello! I'm Abdel Sadki and I'm 42"
const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,

  growOlder: function() {
    this.age = this.age + 1;
  },

  fullname: function() {
    return `${this.firstname} ${this.lastname}`;
  },

  introduceMyself: function() {
    return `Hello! I'm ${this.fullname()} and I'm ${this.age}`;
  }
};

console.log(person.introduceMyself());
console.log(person.fullname());
console.log(person.introduceMyself());


module.exports = person;
