import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";

const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products";

const postCardsContainer = document.querySelector(".post-cards-container");

async function getArchive() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    for (let i = 0; i < result.length; i++) {
      const postTitle = result[i].name;
      const postImage = result[i].images[0].src;
      //const imageAltText = result[i].description;
      const postDate = result[i].attributes[0].terms[0].name;
      const postText = result[i].description;
      const id = result[i].id;

      postCardsContainer.innerHTML += `
      <div class="post-card">
          <div class="post-card-header-container">
            <h2 class="post-card-header-title">${postTitle}</h2>
            <date class="post-card-header-date">${postDate}</date>
          </div>
          <figure class="post-card-img">
            <img src="${postImage}" alt="DALL-E's interpretation of ${postTitle}" />
          </figure>
          <div class="post-card-text">
            <p>${postText.slice(0, 200)}...</p>
          </div>
          <div class="post-card-button-container">
            <a class="read-more-button" aria-label="Read more" href="single-post.html?id=${id}">
              Read more
            </a>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getArchive();
