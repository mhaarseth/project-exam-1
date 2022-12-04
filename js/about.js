import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";
import { setSiteInfo } from "./components/setSiteInfo.js";
import { displayError } from "./components/displayError.js";

setSiteInfo();

const url = "https://mhaarseth.no/flower-power/wp-json/wp/v2/pages/";
const aboutText = document.querySelector(".about-text");
const aboutHeading = document.querySelector(".about-content-heading");

async function getAboutText() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const wpAboutText = result[0].content.rendered;
    const wpAboutHeading = result[0].title.rendered;

    aboutText.innerHTML = `
        ${wpAboutText}
      `;
    aboutHeading.innerHTML = `
      ${wpAboutHeading}
    `;
  } catch (error) {
    displayError(error);
  }
}

getAboutText();
