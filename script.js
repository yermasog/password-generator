var charLength = (document.getElementById("charLength").value)
var lowerCase = (document.getElementById("lowercase").checked)
var upperCase = (document.getElementById("uppercase").checked)
var numeric = (document.getElementById("numbers").checked)
var specialChar = (document.getElementById("specialChar").checked)

var lower = "abcdefghijkjlmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]=<>/,.|~?;:-+'_`";

console.log(charLength)
console.log(lowerCase)
console.log(upperCase)
console.log(numeric)
console.log(specialChar)

// var masterList = ""
// if (lowerCase === "yes") {
//   masterList += lower
// }

// if (upperCase === "yes") {
//   masterList += upper
// }

// if (numeric === "yes") {
//   masterList += number
// }

// if (specialChar === "yes") {
//   masterList += symbol
// }

// function getRandomChar() {
//   return masterList[Math.floor(Math.random() * masterList.length)];
// }

// function generatePassword() {
//   var passwordArr = []
//   for (var i = 0; i <= charLength; i++) {
//     let newChar = getRandomChar();
//     passwordArr.push(newChar)

//   }
//   return passwordArr.join("")
// }

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);