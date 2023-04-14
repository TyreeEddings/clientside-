"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Tyree
      Date:   04/13/23

      Filename: project09-03.js
*/

/* Page Objects */

var lastVisitDate = document.getElementById("lastVisitDate");
var articleDates = document.getElementsByClassName("posttime");


if (localStorage.sbloggerVisit) {
    let storedLastDate = localStorage.getItem("sbloggerVisit");
    lastVisitDate.textContent = storedLastDate;
    let lastDate = new Date(storedLastDate);
    for (const articleDate of articleDates) {
      let articleDateValue = new Date(articleDate.textContent);
      if (articleDateValue > lastDate) {
        articleDate.innerHTML += "<strong>new</strong>";
      }
    }
  } else {
    lastVisitDate.textContent = "Welcome to SBlogger!";
    for (const articleDate of articleDates) {
      articleDate.innerHTML += "<strong>new</strong>";
    }
  }
  
  let currentDate = new Date("9/12/2024");

localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
