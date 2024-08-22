const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const button = document.getElementById("button");
const testButton = document.getElementById("test");
const ner = document.getElementById("ner");
let count = 0;
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

button.addEventListener("click", function () {
  emailShalgah();
  phoneNumberShalgah();
  passwordShalgah();
  nerShalgah();
  localStorage.setItem("email", email.value);
  localStorage.setItem("phoneNumber", phoneNumber.value);
  localStorage.setItem("ner", ner.value);
  window.location.href = "/todo/todo.html";
});

function emailShalgah() {
  if (email.value.includes("@") === false) {
    alert("@ baihgu bn");
  } else {
  }
}

function phoneNumberShalgah() {
  for (let i = 0; i < alphabet.length; i++) {
    if (phoneNumber.value.includes(alphabet[i])) {
      alert("useg bichkushu");
    }
  }
  if (phoneNumber.value.length < 8) {
    alert("8too baih ystoi");
  } else if (phoneNumber.value.length > 8) {
    alert("8too baih ystoi");
  } else {
  }
}

function nerShalgah() {
  if (ner.value === "") {
    alert("nere bicnu");
  }
}

function passwordShalgah() {
  if (password.value.length > 8) {
    count++;
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (password.value.includes(alphabet[i])) {
      count++;
      break;
    }
  }

  for (let j = 0; j < numbers.length; j++) {
    if (password.value.includes(numbers[j])) {
      count++;
      break;
    }
  }
  if (count < 3) {
    alert("useg too bicheh 8as deesh baih");
    count = 0;
  } else {
    count = 0;
  }
}
