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
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
