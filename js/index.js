import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";
import { carousel } from "./components/carousel.js";
import { setSiteInfo } from "./components/setSiteInfo.js";

const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products";

const homeContentSlideContainer = document.querySelector(
  ".home-content-slide-container"
);

const newPostContainer = document.querySelector(".new-post-container");

async function getPosts() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const newPostTitle = result[0].name;
    const newPostImage = result[0].images[0].src;
    const altText = result[0].images[0].alt;
    const newPostText = result[0].description;
    const newPostId = result[0].id;

    newPostContainer.innerHTML = `
    <div class="new-post">
        <figure class="new-post-image">
          <img src="${newPostImage}" alt="${altText}" />
        </figure>
        <div class="new-post-text">
          <div class="new-post-heading">
            <h3>${newPostTitle}</h3>
          </div>
          <div class="new-post-content">
            <p>${newPostText}</p>
          </div>
          <div class="go-to-post-button-container">
            <a class="go-to-post-button" aria-label="Read the full text" href="single-post.html?id=${newPostId}">
              Go to text
            </a>
          </div>
        </div>
      </div>
      
    `;

    for (let i = 1; i < result.length; i++) {
      const postTitle = result[i].name;
      const postImage = result[i].images[0].src;
      const altText = result[i].images[0].alt;
      const postText = result[i].description;
      const id = result[i].id;

      homeContentSlideContainer.innerHTML += `
      <div class="slide">
        <figure class="home-image">
          <img src="${postImage}" alt="${altText}" />
        </figure>
        <div class="home-text">
          <div class="home-text-heading">
            <h2>${postTitle}</h2>
          </div>
          <div class="home-text-content">
            <p>${postText.slice(0, 125)}...</p>
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

getPosts();
carousel();
setSiteInfo();
