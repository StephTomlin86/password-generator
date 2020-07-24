alert("To begin press Generate Password");

document.getElementById("generate").addEventListener("click", beginPrompts);
let criteriaArray = [];
function beginPrompts() {
  var passLength = prompt(
    "How many characters would you like in your password?"
  );
  if (passLength < "8" && passLength > "128") {
    alert("Password length must be between 8 and 128 characters");
  }
  while (passLength < "8" && passLength > "128") {
    var passLength = prompt(
      "How many characters would you like in your password?"
    );
  }
  const randomLowers = "abcdefghijklmnopqrstuvwxyz";

  //var lowers = "abcdefghijklmnopqrstuvwxyz".split("");
  if (confirm("Would you like your password to include lowercase letters?")) {
    alert("Your password will include lowercase letters");
    criteriaArray.push(randomLowers);
    //Here is where I am putting the original string
  } else {
    alert("Your password will NOT include lowercase letters");
  }
  const randomUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (confirm("Would you like your password to include uppercase letters?")) {
    alert("Your password will include uppercase letters");
    criteriaArray.push(randomUppers);
  } else {
    alert("Your password will NOT include uppercase letters");
  }
  const randomNumbers = [0123456789];
  if (confirm("Would you like your password to include numbers?")) {
    alert("Your password will include numbers");
    criteriaArray.push(randomNumbers);
  } else {
    alert("Your password will NOT include numbers");
  }
  const randomSymbols = "!@#$%^&*()";
  if (confirm("Would you like your password to include symbols?")) {
    alert("Your password will include symbols");
    criteriaArray.push(randomSymbols);
  } else {
    alert("Your password will NOT include symbols");
  }
  var newCriteriaArray = [criteriaArray.split("")];
}

function genPassword() {
  let password = "";

  for (var i = 0; i <= passLength; i++) {
    password =
      password +
      newCriteriaArray[Math.floor(Math.random() * newCriteriaArray.length)];

    // Write password to the #password input
    function showPassword() {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }
  //Calling the function
  showPassword();
}
