/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let intervalId = null;

function cartaAlAzar() {
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const figuras = ["♦", "♥", "♠", "♣"];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomNumber = randomElement(numbers);
  const randomFiguras = randomElement(figuras);
  let header = document.querySelector("header");
  let center = document.querySelector(".center");
  let footer = document.querySelector("footer");
  let clase = "";
  if (randomFiguras === "♦") {
    clase = "diamond";
  }
  if (randomFiguras === "♥") {
    clase = "heart";
  }
  if (randomFiguras === "♣") {
    clase = "club";
  }
  if (randomFiguras === "♠") {
    clase = "spade";
  }

  header.innerHTML = `<span class="${clase} icon-header">${randomFiguras}</span>`;
  center.innerHTML = `<span class="number">${randomNumber}</span>`;
  footer.innerHTML = `<span class="${clase} icon-footer">${randomFiguras}</span>`;
}

window.onload = function() {
  //write your code here
  cartaAlAzar();
};
let boton = document.querySelector(".generador");
boton.addEventListener("click", () => {
  cartaAlAzar();
});

function temporizador() {
  setInterval(cartaAlAzar, 2000);
}

let widthInp = document.querySelector("#width");
let heightInp = document.querySelector("#height");
let card = document.querySelector(".card");

widthInp.addEventListener("change", event => {
  card.style.width = event.target.value;
});

heightInp.addEventListener("change", event => {
  card.style.height = event.target.value;
});

let tempStart = document.querySelector(".startRandom");
let tempEnd = document.querySelector(".stopRandom");

function initialRandom() {
  if (!intervalId) {
    intervalId = setInterval(cartaAlAzar, 2000);
    return intervalId;
  }
}

function stopRandom() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

tempStart.addEventListener("click", initialRandom);

tempEnd.addEventListener("click", stopRandom);
