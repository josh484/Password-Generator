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
var lwc = false;
var pwc = false;
var nmc = false;
var spc = false;
var characterLength;
// Function to prompt user for password options
function getPasswordOptions() {
  /* check for password length */
  var characterCheck = false;

  do {
  var characterLengthInput = prompt("Choose length of password between 8-128");
  characterLength = parseInt(characterLengthInput);
  if (isNaN(characterLength)) {
    characterLength = 0;
  }
  characterLengthT(characterLength, characterCheck);
  } while (characterCheck == false && characterLength < 8 || characterLength > 128 && characterCheck == false)
  
  

  /* Check for lowercase */
  var titleWord = "lowercase";
  lwc = promptCheck(titleWord);

  /* check for uppercase */
  titleWord = "uppercase"
  lwc = promptCheck(titleWord);
  console.log(pwc);

  /* check for numeric */
  titleWord = "number"
  nmc = promptCheck(titleWord);

  /* check for special character */
  titleWord = "special character"
  spc = promptCheck(titleWord);
}


// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return random
}


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  spc 
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

function promptCheck(x) {
  var Choice;
  var Check = false
  do{
  var Case = prompt("Should Password have " + x + ", type Y or N") ;
  Choice = Case.toUpperCase();
  if (Choice == "Y" || Choice == "N") {
    Check = true;
    if (Choice == "Y") {
      return true;
    }else {
      return false;
    }
  }
  else {
    Check = false;
  }
  } while (Check == false)
}