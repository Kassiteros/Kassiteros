// This is the code for: T09 - Higher-order Functions and Callbacks - Task1 


/* Create a higher order filter function that is similar to the built in filter() method in JavaScript.

   myFilterFunction will take two arguments:

    1. an array of strings with 10 words where at least three of the strings have six letters 
    2. a callback function that returns a boolean based on whether or not a word has six letters

   myFilterFunction should return a new array that contains only the words that are six letters long and
   no other words.
*/


// declare our input array of ten words/strings where only three words are exactly six letters long
const myInputStringsArray = ["Howdie", "how", "are", "you", "this", "Sunday", "expecting", "all", "fine", "and", "dandy!"];


// myFilterFunction receives an array parameter, and a function parameter. It checks each element of the
// input array using the input function to see if that array element holds a string that is six chars long.
// If it matches a string it stores it to an output array which myFilterFunction returns.

function myFilterFunction(inputStrings, sixCharFind = (checkString) => (checkString.length == 6) ? true : false) {

    // Create an new array to hold only the input strings that are six chars long
    const holdingArray = [];
  
    // A loop to run FOR the length of the input array i.e. all string elements
    for (let index = 0; index < inputStrings.length; index++) {

        // For each element of the array, i.e. each string, use our input function
        // sixCharFind to see if that string is exactly six characters long in which case
        // we add, (PUSH), that string to our output array.

        if(sixCharFind(inputStrings[index]) == true) {

            // sixCharFind returns TRUE, we have a match, a string six chars long
            holdingArray.push(inputStrings[index]);
        }
    }

    // Our function needs to return the new array containing only matching strings
        return holdingArray;
  }
  

  // Let's check out output from myFilterFunction against the original input string
  console.log(`\nOur input array is..: ${myInputStringsArray}`);
  console.log(`\nOur output array is.: ${myFilterFunction(myInputStringsArray)}`);
