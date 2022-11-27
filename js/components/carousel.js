const backButton = document.querySelector(".back-button");
const forwardButton = document.querySelector(".forward-button");
const slideContainer = document.querySelector(".home-content-container");

export function carousel() {
  backButton.addEventListener("click", () => {
    slideContainer.scrollLeft -= 1200;
  });
  forwardButton.addEventListener("click", () => {
    slideContainer.scrollLeft += 1200;
  });
}
