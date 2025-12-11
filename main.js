// We can worry about the JS towards the end
import { retrievingData } from "./storage.js";

// document.querySelector(".create-new").addEventListener("click", openPage2);
// document.querySelector(".open-log").addEventListener("click", openPage3);

// everytime the page loads, read LocalStorage and rerender log displays...


// const openPage2 = () =>
// {
//     console.log("BUTTON");
//     window.location.href= "./page2.html";
// }


// const openPage3 = () =>
// {
//     console.log("BUTTON");
//     window.location.href= "./page3.html";
// }

window.addEventListener("DOMContentLoaded", function(){
     //When dom loads, look through atabase and populatate logs
     const db = retrievingData();
     console.log("Hello");
     db.forEach(element => {
        var el = `<log-display title="${db[0].title}" date="${db[0].dates}"></log-display>`;
        document.getElementById("log-wrapper").innerHTML += el;
        console.log("Hello!");
     });
})
   



