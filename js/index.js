import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";
import { carousel } from "./components/carousel.js";

const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products";

const homeContentContainer = document.querySelector(".home-content-container");

async function getPost() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    for (let i = 0; i < result.length; i++) {
      const postTitle = result[i].name;
      const postImage = result[i].images[0].src;
      //const imageAltText = result[i].description;
      const postDate = result[i].attributes[0].terms[0].name;
      const postText = result[i].description;

      homeContentContainer.innerHTML += `
      <div class="slide">
        <figure class="home-image">
            <img src="${postImage}" alt="DALL-E's interpretation of ${postTitle}" />
          </figure>
          <div class="home-text">
            <div class="home-text-heading">
              <h2>${postTitle}</h2><date>${postDate}</date>
            </div>
            <p class="home-text-content">${postText}</p>
          </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPost();
carousel();
