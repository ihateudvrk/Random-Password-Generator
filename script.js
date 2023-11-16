//This is establishing the variables and arrays.

var characterLength = 8;
var choiceArr = []

var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "*", "(", ")", "_", "-", "+", "="];
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]; 
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]











// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//This function will prompt the user to choose and customize their password and what will be included.

function getPrompts(){
  characterLength = parseInt(prompt ("How many characters would you like in your password today? Please choose any number from 8-128."));
  choiceArr = [];

  //this statement is saying if the user does not choose a number between 8- 128, please choose a number.

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character must be a number. Please choose between 8 - 128. ");
    
    return false;
  }

  //These statements are asking the user if they would like to contain certain criteria in the password.

  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  
  if (confirm("Would you like to use uppercase letters in your password?")) {
     choiceArr = choiceArr.concat(uppercaseArr);
  }
  
  if (confirm("Would you like to use special characters in your password?")) {
     choiceArr = choiceArr.concat(specialCharArr);
  }
  
  if (confirm("Would you like to use numbers in your password?")) {
     choiceArr = choiceArr.concat(numberArr);
  }

  return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
