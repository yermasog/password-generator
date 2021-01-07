var charLength = parseInt(prompt("How many characters would you like?"))
var lowerCase = prompt("Do you want lowercase letters? yes/no").toLowerCase()
var upperCase = prompt("Do you want uppercase letters yes/no").toLowerCase()
var numeric = prompt("Do you want to include numbers? yes/no").toLowerCase()
var specialChar = prompt("Do you want to inlcude special characters? yes/no").toLowerCase()

var lower = "abcdefghijkjlmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]=<>/,.|~?;:-+'_`";

var masterList = ""
if (lowerCase === "yes") {
  masterList += lower
}

if (upperCase === "yes") {
  masterList += upper
}

if (numeric === "yes") {
  masterList += number
}

if (specialChar === "yes") {
  masterList += symbol
}

function getRandomChar() {
  return masterList[Math.floor(Math.random() * masterList.length)];
}

function generatePassword() {
  var passwordArr = []
  for (var i = 0; i <= charLength; i++) {
    let newChar = getRandomChar();
    passwordArr.push(newChar)

  }
  return passwordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);