// import functions and grab DOM elements
const inputVerb = document.getElementById("verb1");
const inputAdj = document.getElementById("adjective1");
const inputNoun = document.getElementById("noun1");

const inputBtn = document.getElementById("submit");

const newVerb = document.getElementById("new-verb1");
const newAdjective = document.getElementById("new-adjective1");
const newNoun = document.getElementById("new-noun1");


inputBtn.addEventListener("click", () => {

newVerb.textContent = inputVerb

});