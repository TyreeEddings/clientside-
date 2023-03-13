/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Jackson Lawrence
      Date:   03/12/23

      Filename: project05-01.js
*/


const quizTime = 30;
const correctAnswers = ["10", "4", "-6", "5", "-7"];
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
quizClock.value = quizTime;
let timeLeft = quizTime;
let timeId;
let questionList = document.querySelectorAll("div#quix input");

startQuiz.onclick = function(){
   overlay.className = "showquiz"
   timeId = setInterval(countdown, 1000);

}

function countdown(){
   if (timeLeft === 0){
      clearInterval(timeId);
      let totalCorrect = checkAnswers();
      if (totalCorrect ===correctAnswers.length){
         window.alert("congradulations! You scored a 100%");
      }
      else
      {
         window.alert("you got " + totalCorrect + "/" + correctAnswers.length);
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";

      }
   }
      else
      {
timeLeft--;
quizClock.value = timeLeft;
      }
   
   }
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}
