const showMoreButton = document.querySelector(".show-more-posts-button");
import { getArchive } from "../archive.js";

export function showMorePosts() {
  showMoreButton.addEventListener("click", () => {
    if (sessionStorage.getItem("postCardImageHeight") === "100px") {
      sessionStorage.setItem(
        "number",
        parseInt(sessionStorage.getItem("number")) + 1
      );
    } else {
      sessionStorage.setItem(
        "number",
        parseInt(sessionStorage.getItem("number")) + 2
      );
    }
    const postCardsContainer = document.querySelector(".post-cards-container");
    postCardsContainer.innerHTML = "";
    getArchive();
  });
}
