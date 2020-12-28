var charLength = prompt("How many characters would you like?")
//write an error if less than 8 or more than 128, must be whole number 

	var lowerCase = prompt("Do you want lowercase letters? yes/no")
	var upperCase = prompt("Do you want uppercase letters yes/no")
	var numeric = prompt("Do you want to include numbers? yes/no")
	var specialChar = prompt("Do you want to inlcude special characters? yes/no")

	var length = charLength
  var lower = lowerCase
  var upper = upperCase
  var number = numeric
  var special = specialChar
  



function getRandomLowerCase(){
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
 function getRandomUpperCase(){
       return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
      
 function getRandomNumber(){
   return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
      
 function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
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

