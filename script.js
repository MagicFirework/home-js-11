"use strict";

const btn = document.getElementById("btn");
const square = document.getElementById("square");
const span = document.getElementById("range-span");
const input = document.querySelector("input[type=text]");
let getInput;
const delBtn = (document.getElementById("e_btn").style.display = "none");
const size = document.querySelector("input[type=range]");
console.log(size);

// событие где переменной передается значение инпута при изменении инпута
input.addEventListener("change", (e) => {
  getInput = e.target.value;
});

// событие где стили квадрата приобретают значение переменной
btn.addEventListener("click", () => {
  square.style.backgroundColor = getInput;
});

// событие в зависимости от полузнка, меняется размер круга и текст
size.addEventListener("input", (e) => {
  span.textContent = e.target.value;
  circle.style.width = e.target.value + "%";
  circle.style.height = e.target.value + "%";
});
