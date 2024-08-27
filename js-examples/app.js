/*
Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output: 34223
*/

// let x = 32243;
// let expectedOutput = 34223;

// function reverseNumber(sayı){
//     return Number(sayı.toString().split("").reverse().join(""))
// }

// console.log(reverseNumber(x))
// console.log(reverseNumber(x) === expectedOutput)

// let stringX = x.toString();

// let arrayX = stringX.split("");

// let reversedX = arrayX.reverse()

// let stringResult = reversedX.join("")

// let result = Number(stringResult)

// console.log(result);

// console.log(((eleman)=> Number(x.toString().split("").reverse().join("")))(x))

// console.log(x.toString().split("").reduce((acc, sayı) => acc = sayı + acc, ""));
/*
Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
// let exampleString = "madam";
// let exampleString2 = "nurses";

// Console.log(exampleString === exampleString.split("").reverse().join(""))
// console.log(exampleString2 === exampleString2.split("").reverse().join(""))

// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// let exampleString = "dog";
// let expectedOutput = ["d", "do", "dog", "og", "g"];
// let solution = function (str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1 ; j <= str.length; j++){
//         result.push(str.slice(i,j))// slice ( ilk indis, hangi indisten bir küçüğüne kadar alsın)
//     }
//   }
//   return result;
// };

// console.log(solution(exampleString))

// !4.Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// const alphabeticOrder = (word) => {
//   return word.split("").sort().join("");
// };

// console.log(alphabeticOrder("webmaster"));

// !5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const firstUpperCase = (str) => {
  str.split(" ").toUpperCase();
};
console.log(firstUpperCase("the quick brown fox"));
