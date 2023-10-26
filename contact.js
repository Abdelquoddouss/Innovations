let formL = document.querySelector(".contact-form");
let nameL = document.querySelector("#formName");
let phoneL = document.querySelector("#formPhone");
let emailL = document.querySelector("#formEmail");
let messageL = document.querySelector("#text");
let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

formL.addEventListener("submit", function (u) {
  u.preventDefault();
  if (nameL.value === "") {
    nameL.nextElementSibling.style.display = "block";
  } else {
    nameL.nextElementSibling.style.display = "none";
  }
  if (phoneL.value === "" || phoneL.value.length !== 10) {
    phoneL.nextElementSibling.style.display = "block";
  } else {
    phoneL.nextElementSibling.style.display = "none";
  }
  if (emailL.value === "" || !emailL.value.match(emailRegex)) {
    emailL.nextElementSibling.style.display = "block";
  } else {
    emailL.nextElementSibling.style.display = "none";
  }
  if (messageL.value === "") {
    messageL.nextElementSibling.style.display = "block";
  } else {
    messageL.nextElementSibling.style.display = "none";
  }
});
