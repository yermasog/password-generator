  var charLength = parseInt(prompt("How many characters would you like?"))
//write an error if less than 8 or more than 128, must be whole number 

	var lowerCase = prompt("Do you want lowercase letters? yes/no")
	var upperCase = prompt("Do you want uppercase letters yes/no")
	var numeric = prompt("Do you want to include numbers? yes/no")
	var specialChar = prompt("Do you want to inlcude special characters? yes/no")

  var lower = "abcdefghijkjlmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?;:-+'_`";

  var masterList = ""
  if (lowerCase){
    masterList += lower 
  } 

  if (upperCase) {
    masterList += upper
  }
  
  if (number) {
    masterList += number
  }

  if (specialChar) {
    masterList += symbol
  }

      
 function getRandomChar(){
    return masterList[Math.floor(Math.random()*masterList.length)];
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

