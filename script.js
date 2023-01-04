console.log("%cஇங்க என்ன பா வேல", "font-size: 50px")
const passwordInput = document.querySelector(".password-box input"),
  copyIcon = document.querySelector(".password-box .copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
  sliderNumber = document.querySelector(".range-box .slider-number"),
  generateButton = document.querySelector(".generate-button");

var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@";
const generatePassword = () => {
  var newPassword = "";
  for (var i = 0; i < rangeInput.value; i++) {
    var randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumbers];
  }
  passwordInput.value = newPassword;
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};
rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
  alert("Code copied")
});
generatePassword();
generateButton.addEventListener("click", generatePassword);
