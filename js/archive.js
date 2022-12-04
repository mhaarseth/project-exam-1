import { toggleMenuOn } from "./components/toggleMenu.js";
import { toggleMenuOff } from "./components/toggleMenu.js";
import { showMorePosts } from "./components/showMorePosts.js";
import { scrollDownPage } from "./components/saveScrollPosition.js";
import { setSiteInfo } from "./components/setSiteInfo.js";
import { displayError } from "./components/displayError.js";

sessionStorage.setItem("number", 10);
const sortOldToNew = document.querySelector(".sort-old-to-new");

export async function getArchive() {
  let perPageNumber = parseInt(sessionStorage.getItem("number"));
  const postCardsContainer = document.querySelector(".post-cards-container");
  const url =
    "https://mhaarseth.no/flower-power/wp-json/wc/store/products?per_page=" +
    perPageNumber;

  try {
    const response = await fetch(url);
    const result = await response.json();

    sortOldToNew.addEventListener("click", () => {
      postCardsContainer.innerHTML = "";
      const reversedResult = result.reverse();

      for (let i = 0; i < reversedResult.length; i++) {
        const postTitle = reversedResult[i].name;
        const postImage = reversedResult[i].images[0].src;
        const altText = reversedResult[i].images[0].alt;
        const postText = reversedResult[i].description;
        const id = reversedResult[i].id;

        postCardsContainer.innerHTML += `
        <div class="post-card">
            <div class="post-card-header-container">
              <h3 class="post-card-header-title">${postTitle}</h2>
            </div>
            <figure class="post-card-img">
              <img src="${postImage}" alt="${altText}" />
            </figure>
            <div class="post-card-text">
              <p>${postText.slice(0, 50)}...</p>
            </div>
            <div class="go-to-post-button-container">
              <a class="go-to-post-button" aria-label="Go to text" href="single-post.html?id=${id}">
                Go to text
              </a>
            </div>
          </div>
        `;
      }
    });

    for (let i = 0; i < result.length; i++) {
      const postTitle = result[i].name;
      const postImage = result[i].images[0].src;
      const altText = result[i].images[0].alt;
      const postText = result[i].description;
      const id = result[i].id;

      postCardsContainer.innerHTML += `
      <div class="post-card">
          <div class="post-card-header-container">
            <h3 class="post-card-header-title">${postTitle}</h2>
          </div>
          <figure class="post-card-img">
            <img src="${postImage}" alt="${altText}" />
          </figure>
          <div class="post-card-text">
            <p>${postText.slice(0, 50)}...</p>
          </div>
          <div class="go-to-post-button-container">
            <a class="go-to-post-button" aria-label="Go to text" href="single-post.html?id=${id}">
              Go to text
            </a>
          </div>
        </div>
      `;

      const postCardImageContainer = document.querySelector(".post-card-img");
      setTimeout(
        sessionStorage.setItem(
          "postCardImageHeight",
          window
            .getComputedStyle(postCardImageContainer)
            .getPropertyValue("height")
        ),
        500
      );
    }
  } catch (error) {
    console.log(error);
    displayError(error);
  }
}

getArchive();
showMorePosts();
scrollDownPage();
setSiteInfo();
