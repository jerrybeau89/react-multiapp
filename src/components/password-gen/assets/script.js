//Function to intake parameters for the password generator using prompts. Each promt validates the input to ensure a correct input is given.
export function passwordGenerator() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz",
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers = "1234567890",
    specialChars = '!@#$%^&*()_+-=<>?,./:";`[{~}]|',
    characterChecker = "",
    generatorHolder = "";

  //This variable uses a do while loop to validate the password length. If a number outside of the parameters is given it will continue to present the same prompt until a correct number is provided. Finally, it sets the variable's value to the users input.
  var passLength;

  do {
    passLength = prompt(
      "Enter the number of characters you would like in your password (8-128): "
    );
  } while ((!passLength|| passLength < 8 || passLength > 128));

  alert(
    "Please choose at least 2 of the 4 following characters for the greatest password strength!"
  );

  //This variable uses a do while loop to validate if the user inputs yes/no as the prompt response. Any and all other answers will force the loop to continue until the either yes or no is provided. Finally it sets the variable's value to the users input.
  var includeLowerCase;

  do {
    includeLowerCase = prompt(
      "Would you like to include lower case letters in your password? (Yes or No)"
    );
  } while (
    (!includeLowerCase,
    !(
      includeLowerCase.toLowerCase() === "yes" ||
      includeLowerCase.toLowerCase() === "no"
    ))
  );

  //This variable uses a do while loop to validate if the user inputs yes/no as the prompt response. Any and all other answers will force the loop to continue until the either yes or no is provided. Finally it sets the variable's value to the users input.
  var includeUpperCase;

  do {
    includeUpperCase = prompt(
      "Would you like to include UPPER case letters in your password? (Yes or No)"
    );
  } while (
    (!includeUpperCase,
    !(
      includeUpperCase.toLowerCase() === "yes" ||
      includeUpperCase.toLowerCase() === "no"
    ))
  );

  //This variable uses a do while loop to validate if the user inputs yes/no as the prompt response. Any and all other answers will force the loop to continue until the either yes or no is provided. Finally it sets the variable's value to the users input.
  var includeNumbers;

  do {
    includeNumbers = prompt(
      "Would you like to include numbers(0-9) in your password? (Yes or No)"
    );
  } while (
    (!includeNumbers,
    !(
      includeNumbers.toLowerCase() === "yes" ||
      includeNumbers.toLowerCase() === "no"
    ))
  );

  //This variable uses a do while loop to validate if the user inputs yes/no as the prompt response. Any and all other answers will force the loop to continue until the either yes or no is provided. Finally it sets the variable's value to the users input.
  var includeSpcial;
  do {
    includeSpcial = prompt(
      "Would you like to include special characters in your password? (Yes or No)"
    );
  } while (
    (!includeSpcial,
    !(
      includeSpcial.toLowerCase() === "yes" ||
      includeSpcial.toLowerCase() === "no"
    ))
  );

  //These if statements check if the input from the propmts are yes, if yes, they will build a string with the corresponding group of characters from that string. If no, no action is taken. Finally, the last if ensures at least one of the four character types is chosen. If one is not chosen, the alert will present and the page will refresh when it is cleared.
  if (includeLowerCase.toLowerCase() === "yes") {
    characterChecker = characterChecker.concat(lowerCase);
  }
  if (includeUpperCase.toLowerCase() === "yes") {
    characterChecker = characterChecker.concat(upperCase);
  }
  if (includeNumbers.toLowerCase() === "yes") {
    characterChecker = characterChecker.concat(numbers);
  }
  if (includeSpcial.toLowerCase() === "yes") {
    characterChecker = characterChecker.concat(specialChars);
  }
  if (characterChecker === "") {
    alert("Please choose at least one set of characters for your password!");
    window.location.reload();
    return;
  }

  // Write password to the #password input on the users innerface
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  //This function takes input from the user prompts. First it determines the password length, then uses a random generator to select characters from the string created from passwordgenerator. It then creates a variable that holds the new password which will be called from the writepassword function above.
  function generatePassword() {
    generatorHolder = "";
    for (let i = 0; i < passLength; i++) {
      let characterNum = Math.floor(Math.random() * characterChecker.length);
      let charSelector = characterChecker[characterNum];
      generatorHolder += charSelector;
    }
    return generatorHolder;
  }
  generatePassword();
  writePassword();
}
