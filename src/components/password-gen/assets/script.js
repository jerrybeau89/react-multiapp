//Function to intake parameters for the password generator using prompts. Each prompt validates the input to ensure a correct input is given.
export function passwordGenerator() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz",
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers = "1234567890",
    specialChars = '!@#$%^&*()_+-=<>?,./:";`[{~}]|',
    characterChecker = "",
    generatorHolder = "";

  while (true) {
    //This variable uses a do while loop to validate the password length. If a number outside of the parameters is given it will continue to present the same prompt until a correct number is provided. Finally, it sets the variable's value to the users input.
    var passLength;

    do {
      passLength = prompt(
        "Enter the number of characters you would like in your password (8-128): "
      );
      if (passLength === null ){
        return;
      }
    } while (!passLength || passLength < 8 || passLength > 128);

    alert(
      "Please choose at least 2 of the 4 following characters for the greatest password strength!"
    );

    // Arrays to store user responses and corresponding character sets
    const prompts = [
      "lower case letters",
      "UPPER case letters",
      "numbers (0-9)",
      "special characters",
    ];
    const charSets = [lowerCase, upperCase, numbers, specialChars];
    const resArray = [];

    // Loop through each prompt to gather user responses
    for (let i = 0; i < prompts.length; i++) {
      var includeRes;
      do {
        includeRes = prompt(
          `Would you like to include ${prompts[i]} in your password? (Yes or No)`
        );

        if (includeRes === null ){
        return;
      }
      } while (
        !includeRes ||
        !(
          includeRes.toLowerCase() === "yes" ||
          includeRes.toLowerCase() === "no"
        )
      );

      resArray.push(includeRes.toLowerCase() === "yes");
    }

    // Check if at least one character set is chosen
    if (!resArray.includes(true)) {
      alert("Please choose at least one set of characters for your password!");
      // Continue to the next iteration of the outer loop to restart the process
      continue;
    }

    // Build the characterChecker based on user responses
    for (let i = 0; i < resArray.length; i++) {
      if (resArray[i]) {
        characterChecker += charSets[i];
      }
    }

    // Write password to the #password input on the users interface
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }

    //This function takes input from the user prompts. First it determines the password length, then uses a random generator to select characters from the string created from passwordGenerator. It then creates a variable that holds the new password which will be called from the writePassword function above.
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
}
