// function getMinNum(arr) {
//   return Math.abs(Math.min(...arr));
// }
// let res = getMinNum([1, 5, -8, 9]);
// console.log(res);

// let AlphabeticalOrder = (str) => str.split("").sort().join("");
// console.log(AlphabeticalOrder("hello world"));

// const oddOrEven = (num) => (num % 2 == 0 ? "even" : "odd");
// let res = oddOrEven(6);
// console.log(res);

// function myFunc(num) {
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(myFunc(10));

// const filterArr = (arr) => arr.filter((arr) => arr % 2 == 0);
// let res = filterArr([2, 4, 1, 8, 9, 5]);
// console.log(res);

// let filterArr = (arr) => arr.filter(item => item % 2 ===0)
// console.log(filterArr([10, 20, 30, 44, 21]))

// let i = 17;
// if (i % 15 == 0) console.log("FizzBuzz");
// else if (i % 3 == 0) console.log("Fizz");
// else if (i % 5 == 0) console.log("Buzz");
// console.log(i);

// let numbersOnly = (arr) =>
//   arr.filter((a) => Number(a));
// console.log(numbersOnly([4, 6, 8, "Abror", "Sardor", 10]));

// function myFunc(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let len = arr.length;

//   let ave = (arr) => arr.reduce((calc, curVal) => calc + curVal, 0) / len;
//   let average = ave(arr);

//   let res =  [max, min, len, average];
//   return res
// }
// let res = myFunc([15, 17, -45, 6, 1]);
// console.log(res);

// let absoluteSummArray = (array) => Math.abs(...array).red;
// console.log(absoluteSummArray([2, 4, 8, -10, -45]));

// let getAbsNums = (array) =>
//   Math.abs(array.reduce((acc, curVal) => acc + curVal));
// console.log(getAbsNums([20, 45, 89, -10, -78]));

// let result = ''
// for(let i = "#"; i.length <= 7; i += i) {
//    result += i
//    console.log(result)
// }

// let countWords = (str) => str.split(" ").length;
// console.log(countWords("hello world!"));

// let maleOrFemale = (name, age) => String(name.length - 1 === "a").toLowerCase() && age < 18 ? "female" : "male";
// let res = maleOrFemale("abroa", "axmedov", 19);
// console.log(res)

//
// let checkparol = (parol) =>
//   Number(password) === parol ? "parol tog'ri" : "parol notog'ri";
// checkparol()

// let checkPassword = () => {
//   let correctPassword = "1234";
//   let attempts = Infinity;

//   while (attempts > 0) {
//     let password = prompt("Enter password...");

//     if (password !== correctPassword) {
//       attempts--;
//       if (attempts > 0) {
//         console.log(
//           `Incorrect password. You have ${attempts} attempt(s) left. Please try again.`
//         );
//       } else {
//         console.log("Sorry, you've exceeded the number of attempts.");
//       }
//     } else {
//       console.log("Correct password");
//       break;
//     }
//   }
// };

// checkPassword();

// var num = prompt("parolni kriting");
// var correctPassword = "1234";

// while (num !== a) {
//   num = prompt("parolni qayta kriting");
//   console.log("parol xato. qayta kiriting");
// }
// console.log("Parol to'g'ri: " + num);

// let count = 5;

// for (let i = 1; i <= count; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "#";
//   }
//   console.log(str);
// }

// Fibanocci sequence
// Factorial of a number
// prime number
// Power of two
// Recursion

// function fibanocci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }
// console.log(fibanocci(5));

// function generateFibonacci(limit) {
//   let sequence = [];
//   let a = 0;
//   let b = 1;
//   sequence.push(a);
//   sequence.push(b);
//   while (true) {
//     let next = a + b;
//     if (next > limit) {
//       break;
//     }
//     sequence.push(next);
//     a = b;
//     b = next;
//   }
//   return sequence;
// }
// const limit = 50;
// const fibonacciSequence = generateFibonacci(limit);
// console.log("Fibonacci sequence up to", limit, ":", fibonacciSequence);

// Example 1
// const number = 5;
// if(number > 0) {
// console.log("hello");
// }

// function createANewstring(str) {
//   let firstThree = str.substring(0, 3);
//   let lastThree = str.substring(str.length - 3);
//   if (str.length >= 3) {
//     return firstThree.concat(lastThree);
//   } else {
//     return str;
//   }
// }
// let res = createANewstring("hello World");
// console.log(res); // Output: "helld"

// function getRandomNumber(max, min) {
// first
// return Math.random() * (max - min) + min;
// Second
//   return Math.random() * 100;
// }
// let resRandomNumber = getRandomNumber(5, 100);
// console.log(resRandomNumber);

// let genrateRandomIntefer = (min, max) => {
//   if (min && max === null) {
//     return 0;
//   } else {
//     return min + Math.floor(Math.random() * (max - min + 1));
//   }
// };
// console.log(genrateRandomIntefer(15, 100));

// let sortArray = (arr) => {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//     }
//   }
// };
// console.log(sortArray([1, 8, 6, 4, 3]));

// function sorter(array) {
//   let swap;
//   let done = false;
//   while (!done) {
//     let swapped = 0;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         swap = array[i];
//         array[i] = array[i - 1];
//         array[i - 1] = swap;
//         swapped = 1;
//       }
//     }
//     if (swapped === 0) {
//       done = true;
//     }
//   }
//   return array;
// }

// let sorterwithSort = (array) => array.sort();
// const numbers = [3, 1, 5, 2, 4];
// console.log(sorterwithSort(numbers))

// let sortArray = (array) => {
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     console.log(`print I : ${array[i]}`);
//     for (let j = i; j < array.length; j++) {
//       console.log(`print J : ${array[j]}`);
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// };

// numbers = [2, 4, 7, 5, 1];
// console.log(sortArray(numbers));

// const a  = 4 - "helo"
// console.log(a);

// const a = isNaN("tasdff")
// console.log(a);

// const a = -2 / 0;
// console.log(a);

// let sortArray = (array) => {
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// };
// let array = [5, 8, 7, 3, 6];
// let res = sortArray(array);
// console.log(res);

// function orderArr(arr) {
//   var result = [];
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       if (arr[i] > arr[j + 1]) {
//       }
//     }
//   }

//   console.log(result);
// }
// let numbers = [5, 8, 7, 3, 6];
// let res = orderArr(numbers);

// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }
//   return array;
// }

// var numbers = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(numbers);
// console.log(numbers);

// let num = 15.516516;
// let res = num.toString();
// console.log(res); // returns a string

// let num = 15.516516;
// let res = num.toExponential(5);
// console.log(res);

// let num = 15.516516;
// let res = num.toFixed(2);
// console.log(res); //15.52

// let num = 15.416516;
// let res = num.toPrecision(2);
// console.log(res);  //15 rounded

// let num = 15.416516;
// let res = num.valueOf() +10;
// console.log(res);  //25 rounded = returns initial number

// let num = "15.416516";
// let res = parseInt(num)
// console.log( typeof res);  //converts to the string and rounds to the initial valuer

// let num = "15.416516";
// let res = parseInt(num);
// console.log(typeof res); //converts to the string

// const BubleSort = (array) => {
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };
// let res = BubleSort([4, 1, 8, 6, 9, 11, 10]);
// console.log(res);

// function stringToArray(string) {
//   let result = [];
//   let  traverse = function foo(string) {
//     for (let  i = 0; i < string.length; i++) {
//       let chr = string.charAt(i);
//       if (chr === " ") {
//         result.push(string.slice(0, i));
//         foo(string.slice(i + 1));
//         return;
//       }
//     }
//     result.push(string);
//   };
//   traverse(string);
//   return result;
// }

// let deleteWhiteSpace = (str) => {
//     return str.split(" ").join("")
// }

// let deleteWhiteSpace = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       str = str.replace(/\s/g, "");
//     }
//   }
//   return str;
// };
// console.log(deleteWhiteSpace("abror ax medo v"));

// let getMAtches = (text, word) => {
//   let splittedText = text.split(/[\s,.]+/);
//   let matches = [];
//   splittedText.forEach((item) => {
//     if (item.toLowerCase() === word.toLowerCase()) {
//       matches.push(item);
//     }
//   });
//   return matches;
// };

// console.log(getMAtches("find smth that I need", "need"));


