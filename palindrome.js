/* This JavasScript is for T07 - Control Structures - For and While Loops - Practical Task 2 
   The user will be prompted to enter a word and the program will check to see if the word is
   a palindrome, i.e. gives the same word when the letters are reversed like "racecar". */

/* This code will use the input string to build a reversed copy of that string so the first input
   character will be in the last position and the last input character will be in the first 
   position in the output string. We will then compare the two strings and if they match we will
   declare to the user that we have found a palindrome ! */

/* Let's prompt the user to input a word */
let userInputstring = prompt("Please input a word: ");

/* Let's create an output string that will hold our reversed input string. It will start empty */
let outputString = "";

/* Let's get the lenght of the input string with the string length property. This will inform the
   for loop how many iterations it needs to make. */
let stringLen = userInputstring.length;

/* Let's run our loop for the length of the string stringLen which we derived above with the
   length property. We are reversing our string so we start at the last letter which we'll
   find in position stringLen and then we'll work backwards decrementing our counter so we
   copy the userinputString starting from the last character and end at the first. */
   for (var i = stringLen - 1; i >= 0; i--) { 
       outputString += userInputstring[i];
   }


/* Check the input string is correctly reversed
console.log(outputString); */


/* Confirm to the user the string, the word they entered. */
console.log(`You entered the word: ${userInputstring}`);


/* Finally, let's compare the two strings. If we have an exact match tell the user that they have
   entered a palindrome. Remember, we have to standardise and ensure we use the same case in both
   strings otherwise we won't have a perfect match e.g Racecar is NOT equal to racecaR ! We will
   ensure both input and comparison string are converted to lower case and then compare them. To
   do this we will use the tolowerCase() method ! Of course we're not checking against the 
   dictionary to see if a word exists so "lool" would get flagged as a palindrome ;-) */

if (userInputstring.toLowerCase() == outputString.toLowerCase()) {
   console.log(`\nCONGRATULATIONS ! You entered a *PALINDROME*`);
}

// PLEASE NOTE: Have run this through a validator but cannot resolve the parse errors !??