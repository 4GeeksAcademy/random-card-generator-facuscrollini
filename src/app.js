/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const figuras = ["♦", "♥", "♠", "♣"];

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomNumber = randomElement(numbers);
const randomFiguras = randomElement(figuras);
window.onload = function() {
  //write your code here
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
};
