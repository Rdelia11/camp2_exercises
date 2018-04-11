const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let numberIsMagic = getRandomInt(100);
console.log(numberIsMagic);

function againAndAgain () {
  reader.question("What number is it? ", streamNber => {
    if (isNaN(streamNber)) {
      console.log("Not a Number");
    } else {
      let number = parseInt(streamNber, 10);
      console.log(number);
      if (number < 1 || number > 100) {
        console.log("Out of range !");
      };
      if (numberIsMagic > number){
        console.log("Too low");
      } else if (numberIsMagic < number){
        console.log("too high");
      } else if (numberIsMagic === number){
        console.log("You win");
        reader.close();
        return;
      };
    }
    againAndAgain();
  });
}
againAndAgain();
