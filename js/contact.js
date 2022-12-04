import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";
import { eMailValidation } from "./components/emailValidation.js";
import { setSiteInfo } from "./components/setSiteInfo.js";

const submitForm = document.querySelector(".submit-contact-form");
const fullName = document.getElementById("name");
const nameValidation = document.querySelector(".name-validation");
const mailValidation = document.querySelector(".email-validation");
const subject = document.getElementById("subject");
const subjectValidation = document.querySelector(".subject-validation");
const message = document.getElementById("message");
const messageValidation = document.querySelector(".message-validation");

function formValidation(event) {
  event.preventDefault();

  if (fullName.value.trim().length < 5) {
    nameValidation.style.display = "block";
  } else {
    nameValidation.style.display = "none";
  }

  if (subject.value.trim().length < 15) {
    subjectValidation.style.display = "block";
  } else {
    subjectValidation.style.display = "none";
  }

  if (message.value.trim().length < 25) {
    messageValidation.style.display = "block";
  } else {
    messageValidation.style.display = "none";
  }

  if (eMailValidation()) {
    mailValidation.style.display = "none";
  } else {
    mailValidation.style.display = "block";
  }
}

submitForm.addEventListener("click", formValidation);
const successMessage = document.querySelector(
  ".form-success-message-container"
);

function formSentMessage() {
  if (
    nameValidation.style.display === "none" &&
    subjectValidation.style.display === "none" &&
    messageValidation.style.display === "none" &&
    mailValidation.style.display === "none"
  ) {
    successMessage.style.display = "flex";
  } else {
    successMessage.style.display = "none";
  }
}

submitForm.addEventListener("click", formSentMessage);
setSiteInfo();
