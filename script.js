// Assignment Code
//var generateBtn = document.querySelector("#generate");
let password = "";

alert("To begin, press Generate Password");

document.getElementById("generate").addEventListener("click", beginPrompts);

function beginPrompts) {
//Password Length

  var passLength = prompt("How many characters would you like in your password?" );
if (passLength < "8" && passLength > "128" && passLength === null) {
    alert("Password length must be between 8 and 128 characters");
}  

while (passLength < "8" && passLength> "128" && passLength === null) {
    var passLength = prompt("How many characters would you like in your password?");
}
//Password Criteria Arrays
const randomLowers = "abcdefghijklmnopqrstuvwxyz"; 
var lowers = "abcdefghijklmnopqrstuvwxyz".split("");
let criteriaArray = []    
if (confirm("Would you lkike your password to include lowercase letters?")) {
    alert("Your password will include lowercase letters");
    criteriaArray.push(lowers);
} else {
 alert ("Your passwork will NOT include lowercase letters")
}
const randomUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let criteriaArray = []
if (confirm("Would you like your password to include uppercase letters?")) {
    alert("Your password will include uppercase letters");
    criteriaArray.push(randomUppers);
} else {
    alert("Your password will NOT include uppercase letters")
}
const randomNumbers = [0123456789];
if (confirm("Would you like your password to include numbers?")) {
    alert("Your passwrod will include numbers");
    criteriaArray.push(randomNumbers);
} else {
    alert ("Your password will NOT include numbers")
}
const randomSymbols = "!@#$%^&*()";   
var symbols = "!@#$%^&*()".split("");
let criteriaArray = []   
if (confirm("Would you like your password to include symbols?")) {
    alert("Your password will include symbols");
    criteriaArray.push(randomSymbols);
} else {
    alert ("Your password will NOT include symbols")
} 
//Click event 
    
//Create random string and show in box  
for (var i = 0; i <= passLength; i++); {
    password = password + criteriaArray[Math.floor(Math.random()*criteriaArray.length)]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

