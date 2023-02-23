/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: 
      Date:   

      Filename: 4-3.js
*/

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   commentText = document.getElementById("comment").value;
   charCount = countCharacters(commentText);
   try {
      if (charCount >= MAX_REVIEW) throw "You Have Exceeded The Character Count Limit"; 
   }
   catch(err) {
      warningBox.innerHTML = "You Have Exceeded The Character Count Limit"
   }
   document.getElementById("countValue").innerHTML = charCount
   return charCount
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 
