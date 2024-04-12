// This is the code for: T08 - Functions, Scope and Closures - Task1 

// Let's define a global array for use in our functions !
const myNums = [6,4,3,4,5];


// Define a function that takes an array of integers and returns their sum 
let findSum = (myArray) => myArray.reduce((a, b) => a + b, 0);
console.log(`Function findSum() outputs`, findSum(myNums));

// Define a function that subtracts the second number from the first number 
let subtractNumbers = (myArray) => myArray[0] - myArray[1];
console.log(`Subtracting the second array number from the first,`, myNums[1], `-`, myNums[0], `gives`, subtractNumbers(myNums));

// Define a function that multiplies two numbers. We'll use numbers from our global array myNums defined above 
let multiplyNumbers = (a,b) =>  a * b;
console.log(`Function multiplyNumbers() called with inputs`, myNums[0], `and`, myNums[1], `outputs`, multiplyNumbers(myNums[0], myNums[1]));

// Define a function divideNumbers that divides the first number by the second, handling the case where the second
// number is zero in which case we return the value -1 ! Have used a ternary operator to test for a zero value in 
// the second input because this seems to work whereas an if statement failed !?
let divideNumbers = (a,b) =>  (b != 0) ? a / b : -1;
console.log(`Function divideNumbers() with inputs`, myNums[0], `and`, myNums[1], `outputs`, divideNumbers(myNums[0], myNums[1]));



// Declare a 3 integer array for the second part of Task 1
const myThreeintArray = [7,8,9];

// The following operations all act on our array of 3 digit numbers defined as the constant myThreeintArray.
// Each function will log its return value
console.log(`\n
****************************************************************************
* The following functions operate over the 3 integer array myThreeintArray *
****************************************************************************`);

// Use the array to call findSum()
console.log(`\nThe sum of the values in the array (${myThreeintArray}) returns the value ${findSum(myThreeintArray)} !`);

// We need to store the output of findSum() as a parameter supplied to divideNumber() below 
let sumArray = findSum(myThreeintArray);


// Use the first and second numbers from the array to call subtractNumbers()
console.log(`\nSubtracting the second number of the array, ${myThreeintArray[1]} from the first ${myThreeintArray[0]}, returns the value ${subtractNumbers(myThreeintArray)} !`);


// Use the third and first numbers of the array to call multiplyNumbers()
console.log(`\nMultiplying the third and first numbers of the array, ${myThreeintArray[2]} and ${myThreeintArray[0]}, returns the value ${multiplyNumbers(myThreeintArray[2],myThreeintArray[0])} !`);


// Call divideNumbers() using the sum of all three numbers obtained from findSum() and 
// the third number from the array
console.log(`\nDividing the result of findSum, ${sumArray}, by the third number in the array, ${myThreeintArray[2]}, returns ${divideNumbers(sumArray,myThreeintArray[2])} !`);

