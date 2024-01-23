let genrateRandomInteger = (min, max) => {
  if (min && max === null) {
    return 0;
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};
// console.log(genrateRandomInteger(15, 100));

function fizzBuzz(num) {
  if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 5 === 0 && num % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(num);
  }
}
console.log(fizzBuzz(2));
