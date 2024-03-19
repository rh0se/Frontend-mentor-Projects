const getStartedInput = document.getElementById("getStarted");
const getStartedForm = document.getElementById("get-started-form");
const getStartedButton = document.getElementById("getStarted-btn");
const earlyAccessInput = document.getElementById("early-access");
const earlyAccessForm = document.getElementById("early-access-form");
const earlyAccessButton = document.getElementById("access-button");
const getStartedError = document.getElementById("top-error");
const earlyAccessError = document.getElementById("access-error");

const toMatch = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;

function handleForms() {
    getStartedForm.onsubmit = function(c) {
        if (toMatch.test(getStartedInput.value)) {
           getStartedError.style.color ="green";
           getStartedError.innerText ="Email is Valid";
           return true;
       } else {
           getStartedError.innerText = "Please check your email";
           console.log(getStartedError.innerText)
           getStartedError.style.fontsize = "10px";
           getStartedError.style.color = "red";
           getStartedInput.style.border = "1px solid red";
           return false;
       }
   }

   earlyAccessForm.onsubmit = function(c) {
     if (toMatch.test(earlyAccessInput.value)) {
        earlyAccessError.style.color ="green";
        earlyAccessError.innerText ="Email is Valid";
    } else {
        earlyAccessError.innerText = "Please check your email";
        console.log(earlyAccessError.innerText)
        earlyAccessError.style.fontsize = "10px";
        earlyAccessError.style.color = "inherit";
        getStartedInput.style.border = "0.5px solid red";
        return false;
        }
    }
}


window.onload = function(c) {
    handleForms();
}

/* another way of validating the email with the onsubmit attribute of the form element 
const inputNList = document.querySelectorAll("input");
let inputList = [];
inputNList.forEach(input => {inputList.push(input);});
console.log(inputList.indexOf(getStartedInput));
const checkEmail = (email)  =>{
    console.log(email);
    const toMatch = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    let messageTargets = [];
    document.querySelectorAll(`.message`).forEach(message => {messageTargets.push(message);});
    console.log(messageTargets);
    const messageBox = messageTargets[inputList.indexOf(email)];
    console.log(messageBox);
    if (toMatch.test(email.value) === true) {
        messageBox.innerText = "Email is Valid";
        console.log(messageBox.innerText)
        messageBox.style.color = "green";
        return true;
    } else {
        messageBox.innerText = "Please check your email";
        console.log(messageBox.innerText)
        messageBox.style.fontsize = "10px";
        if (inputList.indexOf(email) === 1) {
            messageBox.style.color = "inherit";
        } else  {
            messageBox.style.color = "red";
        }
        return false;
    } 
}function for inline onsubmit*/ 

