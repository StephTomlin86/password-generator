/ Assignment Code
var generateBtn = document.querySelector("#generate");
let passowrd = "";
//Password Length

  var passLength = prompt("How many characters would you like in your password?" );
if (passLength < "8" && passLength > "128") {
    alert("Password length must be between 8 and 128 characters");
} else {

}
//Password Criteria Arrays
function getRandomLowers (){
    const randomLowers = "abcdefghijklmnopqrstuvwxyz";     
}
function getRandomUppers (){
    const randomUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
function getRandomNumbers (){
    const randomNumbers = "0123456789";
}
function getRandomSymbols (){
    const randomSymbols = "!@#$%^&*()";        
}
//Password Criteria Confirms
function myFunction() {
    if (confirm ("Would you like your password to include lowercase letters?" )){
        begin 
        alert ("Your password will include lowercase letters");
        criteriaArray.push (randomLowers);     
        end
    } else {
        alert ("Your password will NOT include lowercase letters")
    }
function myFunction() {
    if (confirm ("Would you like your password to include uppercase letters?" )){
        begin 
        alert ("Your password will include uppercase letters");
        criteriaArray.push (randomUppers);     
        end
    } else {
        alert ("Your password will NOT include uppercase letters")
    }
function myFunction() {
    if (confirm ("Would you like your password to include numbers?" )){
        begin 
        alert ("Your password will include numbers");
        criteriaArray.push (randomNumbers);     
        end
    } else {
        alert ("Your password will NOT include numbers")
    }
function myFunction() {
    if (confirm ("Would you like your password to include symbols?" )){
        begin 
        alert ("Your password will include symbols");
        criteriaArray.push (randomSymbols);     
        end
    } else {
        alert ("Your password will NOT include symbols")
    }
const criteriaArray = []
if (criteriaArray === null){
     return " "; 
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

