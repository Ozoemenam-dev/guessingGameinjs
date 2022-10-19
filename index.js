let playerName = prompt("what is your username? ");


function range(min, max) {
  let genNumber = Math.round(Math.random() * (max - min) + min);
  return genNumber;
}
let generatedNumber = range(1, 2);
console.log(generatedNumber);

let guessNumber = prompt("guess the generated number? ")
console.log(guessNumber);
let point = "";
function guess(a, b) {

  if (guessNumber == generatedNumber) {
    point++;
  } else {
    point += 0;
  }
  return point;
}

console.log(guess(guessNumber));
console.log("Your point is " + point)

console.log("Welcome to stage 2");
range(1, 3);
console.log("generatedNumber is " + range(1, 3));

let guessSecondNumber = prompt("guess the generated number? ")
console.log(guessSecondNumber);

console.log(guess(guessSecondNumber));
console.log("Your point is " + point)
