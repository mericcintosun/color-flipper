const hexValue = document.querySelector("#hex");
let bodyElement = document.body;
const buttonTitleValue = document.querySelector('.click-button');

function randomHex() {
  let hexValues = "01234567889ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues.charAt(randomIndex);
  }
  hexValue.innerHTML = hexColor;
  bodyElement.style.backgroundColor = hexColor;
}

function resetFunction() {
  bodyElement.style.backgroundColor = 'black';
  hexValue.innerHTML = "#000";
  buttonTitleValue.style.color = "white";
}