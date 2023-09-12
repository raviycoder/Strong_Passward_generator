document.addEventListener("DOMContentLoaded", function () {
  const lengthInput = document.getElementById("password-length");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numberCheckbox = document.getElementById("number");
  const spacialCheckbox = document.getElementById("spacial-character");
  const generateButton = document.getElementById("generate");
  passwordTextarea = document.getElementById("password");
  const copyButton = document.getElementById("copytext")

  copyButton.addEventListener("click", function (){
    passwordTextarea.select(); // Select the text in the textarea
    document.execCommand("copy"); // Copy the selected text to the clipboard
    alert("Text copied to clipboard");

  })

  generateButton.addEventListener("click", function () {
    const length = parseInt(lengthInput.value);
    const uppercase = uppercaseCheckbox.checked;
    const lowercase = lowercaseCheckbox.checked;
    const number = numberCheckbox.checked;
    const spacialCharacter = spacialCheckbox.checked;
    
    
    const password = generatePassword(
      length,
      uppercase,
      lowercase,
      number,
      spacialCharacter
    );
    passwordTextarea.value = password;
  });

  function generatePassword(
    length,
    uppercase,
    lowercase,
    number,
    spacialCharacter
  ) {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    let charSet = "";

    if (uppercase) charSet += upperChars;
    if (lowercase) charSet += lowerChars;
    if (number) charSet += numberChars;
    if (spacialCharacter) charSet += specialChars;

    if (charSet.length === 0) {
      alert("Please select at least one character type.");
      return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(randomIndex);
    }

    return password;
  }
});

