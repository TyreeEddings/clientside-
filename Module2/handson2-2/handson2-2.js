/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02
      Application to test for completed form
      Author: 
      Date:   
      Filename: handson2-2.js
 */
 
document.getElementById("submit").addEventListener("click", verifyForm);


function verifyForm(){
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      if (name && email && phone) {
      window.alert("Thank you!");
      } else {
      window.alert("Please fill in all fields");
      }
}
