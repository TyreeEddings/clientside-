"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Jackson Lawrence
      Date:   03/12/23

      Filename: project05-02.js
*/


 const images = document.getElementsByTagName("img");
 const photoBucket = document.getElementById("photo_bucket");
 const photoList = document.getElementById("photo_list");
 
 
 for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
       if (this.parentNode.id === "photo_bucket") {
          
          const newItem = document.createElement("li");
         
          photoList.appendChild(newItem);
        
          newItem.appendChild(this);
       } else {
        
          const oldItem = this.parentNode;
        
          photoBucket.appendChild(this);
       
          oldItem.parentNode.removeChild(oldItem);
       }
    }
 }
