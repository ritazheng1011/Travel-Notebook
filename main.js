// We can worry about the JS towards the end

// Page Navigation
const openPage2 = () =>
{
    console.log("BUTTON");
    window.location.href= "./page2.html";
}
document.querySelector(".create-new").addEventListener("click", openPage2);


const openPage3 = () =>
{
    console.log("BUTTON");
    window.location.href= "./page3.html";
}
document.querySelector(".open-log").addEventListener("click", openPage3);
