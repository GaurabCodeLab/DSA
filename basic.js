// Problem Statement:
// Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.
function sumFunc(a, b) {
  let sum = a + b;
  console.log(sum);
}

// sumFunc(14, 12);

// Problem Statement:
// Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it.
function squareFunc(x) {
  let square = x * x;
  return square;
}

let result = squareFunc(12);
// console.log(result);

// Problem Statement:
// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
function checkEligibility(age) {
  if (age < 0) {
    console.log("Invalid age");
  } else if (age > 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not Eligible to vote");
  }
}

// checkEligibility(23);

// Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd.
function isEven(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

// isEven(5);

// Problem Statement:
// Write a program to print all even numbers from an array
let arr = [10, 3, 5, 2, 7, 6, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// Problem Statement:
// Write a function that returns the number of negative numbers in an array
let arr2 = [2, -6, -4, 8, 1, -9];
function countNegativeArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const result2 = countNegativeArray(arr2);
// console.log(result2);

// Problem Statement:
// Write a function that returns the largest number in an array
let arr3 = [2, -6, -40, 18, 10, -9];
function maxArray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const result3 = maxArray(arr3);
// console.log(result3);

// Problem Statement:
// Write a function that returns the smallest number in an array
let arr4 = [2, -6, -40, -180, 10, -9];
function minArray(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const result4 = minArray(arr4);
// console.log(result4);

// Problem Statement:
// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
let arr5 = [2, -6, -40, 8, 10, -9];
function findIndex(arr, x) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      index = i;
    }
  }
  return index;
}

let result5 = findIndex(arr5, 8);
console.log(result5);
