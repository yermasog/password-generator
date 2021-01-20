var charLength = document.getElementById("charLength")
var lowerCase = document.getElementById("lowercase")
var upperCase = document.getElementById("uppercase")
var numeric = document.getElementById("numbers")
var specialChar = document.getElementById("specialChar")

var lower = "abcdefghijkjlmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]=<>/,.|~?;:-+'_`";

// console.log(lowerCase)

var passwordArr = []
var masterList = ""

function getRandomChar() {
  return masterList[Math.floor(Math.random() * masterList.length)];
}

function generatePassword() {
  console.log(charLength)
  console.log(lowerCase.checked)
  console.log(upperCase.checked)
  console.log(numeric.checked)
  // console.log(specialChar)
  charLength = parseInt(document.getElementById("charLength").value);

  if (lowerCase.checked) {
    masterList += lower
  }

  if (upperCase.checked) {
    masterList += upper
  }

  if (numeric.checked) {
    masterList += number
  }

  if (specialChar.checked) {
    masterList += symbol
  }
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
