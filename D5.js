/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area (l1, l2) {
   let a = l1 * l2; 
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (i1, i2) {
    if (i1 === i2) {
      let  sum = (i1 + i2)*3;
    } else {
    let sum = i1 +i2;
}
    return sum;
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (num1, num2 = 19) {
    if (num1 >= num2) {
        let abs = (Math.abs(num1 - num2))*3
    } else {
         let abs = Math.abs(num1 - num2);
    }
    return abs;
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary (n) {
    if (((n >= 20) && (n <= 100)) || (n === 400)) {
        return true;
    } else {
        return false;
    }
}

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify (str) {
    if (str.startsWith("Strive")) {
        return str;
    } else {
        return "Strive" + str;
    }
}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7 (x) {
    if ((x % 3 === 0) || (x % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString (str) {
    return [...str].reverse().join("");
}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst (str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    words.join(" ");
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

//function cutString () {

//}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

//function giveMeRandom (n) {
  //  let rn = (n * Math.floor(Math.random() * 10));
    //returns; 
//}
