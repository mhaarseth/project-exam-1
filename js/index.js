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
      const altText = result[i].images[0].alt;
      const postDate = result[i].attributes[0].terms[0].name;
      const postText = result[i].description;
      const id = result[i].id;

      homeContentContainer.innerHTML += `
      <div class="slide">
        <figure class="home-image">
          <img src="${postImage}" alt="${altText}" />
        </figure>
        <div class="home-text">
          <div class="home-text-heading">
            <h2>${postTitle}</h2><date>${postDate}</date>
          </div>
          <div class="home-text-content">
            ${postText.slice(0, 750)}...
          </div>
          <div class="go-to-post-button-container">
            <a class="go-to-post-button" aria-label="Read the full text" href="single-post.html?id=${id}">
              Go to text
            </a>
          </div>
        </div>
      </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPost();
carousel();

console.log(homeContentContainer.clientWidth);
