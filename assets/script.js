// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  /* check for password length */
  var characterCheck = false;
  var characterLength;
  do {
  var characterLengthInput = prompt("Choose length of password between 8-128");
  characterLength = parseInt(characterLengthInput);
  characterLengthT(characterLength, characterCheck);
  } while (characterCheck == false && characterLength < 8 || characterLength > 128 && characterCheck == false)
  
  

  /* Check for lowercase */
  var lowercaseChoice;
  var lowercaseCheck = false
  var lwc = false;
  do{
  var checkLowerCase = prompt("Should Password have lowercase, type Y or N") ;
  lowercaseChoice = checkLowerCase.toUpperCase();
  if (lowercaseChoice == "Y" || lowercaseChoice == "N") {
    lowercaseCheck = true;
    if (lowercaseChoice == "Y") {
      lwc = true;
    }else {
      lwc = false;
    }
  }
  else {
    lowercaseCheck = false;
  }
  } while (lowercaseCheck == false)

  /* check for uppercase */
  var uppercaseChoice;
  var uppercaseCheck = false
  var pwc = false;
  do{
  var checkUpperCase = prompt("Should Password have lowercase, type Y or N") ;
  uppercaseChoice = checkUpperCase.toUpperCase();
  if (uppercaseChoice == "Y" || uppercaseChoice == "N") {
    uppercaseCheck = true;
    if (uppercaseChoice == "Y") {
      pwc = true;
    }else {
      pwc = false;
    }
  }
  else {
    uppercaseCheck = false;
  }
  } while (uppercaseCheck == false)


}
getPasswordOptions();
// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function characterLengthT(x,y) {
  if (x.isNaN) {
    return y = false;
  }
  else {
    return y = true;
  }
}