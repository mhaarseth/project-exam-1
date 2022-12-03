import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";
import { modal } from "./components/modal.js";
import { setSiteInfo } from "./components/setSiteInfo.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products/" + id;

const singlePostContainer = document.querySelector(".single-post-container");

async function getSinglePost() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const postTitle = result.name;
    const postText = result.description;

    singlePostContainer.innerHTML = `
    
    <div class="single-post-content-container">
        <div class="single-post-heading-container">
            <h2>${postTitle}</h2>
            <h3>By: m. haarseth</h3>
        </div>
        <div class="single-post-content">
            <div class="single-post-images-container">
            </div>
            <div class="single-post-text-container">
                ${postText}
            </div>
        </div>
        <div class="single-post-comments-container"></div>
    </div>
    `;

    for (let i = 0; i < result.images.length; i++) {
      const postImage = result.images[i].src;
      const altText = result.images[i].alt;
      const singlePostImagesContainer = document.querySelector(
        ".single-post-images-container"
      );

      singlePostImagesContainer.innerHTML += `
      <figure class="single-post-image"><img src="${postImage}" class="single-post-image-img" alt="${altText}" ></figure>
      `;

      modal();
    }
  } catch (error) {
    console.log(error);
  }
}

getSinglePost();
setSiteInfo();
