"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01
    
      Author: Tyree
      Date: 3/24/2023
      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");

let pwd = document.getElementById("pwd");

let pwd2 = document.getElementById("pwd2");

 

submitButton.addEventListener("click", function() {

 

  

if (pwd.validity.valueMissing) {

            pwd.setCustomValidity("Please fill in the password field.");

      //Check for if the password field matches the pattern given in the html

    } else if (pwd.validity.patternMismatch) {

      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");

    } else {

   

    if (pwd.value === pwd2.value) {

      
      pwd.setCustomValidity("");

    } 
    else {
      pwd.setCustomValidity("Your passwords must match."); //need to fix this and put it in the if (pwd.value !== pwd2.value)
    }
  }
});
