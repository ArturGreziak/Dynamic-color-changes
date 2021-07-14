const form = document.querySelector(".form-color");
const input = form.querySelector(".input-color");
const colorDiv = form.querySelector(".div-color");

input.addEventListener("change", e => {
    colorDiv.style.backgroundColor = input.value
});

const inputs = form.querySelector(".input-colors");
const baner = form.querySelector(".baner");

inputs.addEventListener("change", e => {
  baner.style.backgroundColor = inputs.value
});