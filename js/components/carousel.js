const backButton = document.querySelector(".back-button");
const forwardButton = document.querySelector(".forward-button");
const slideContainer = document.querySelector(".home-content-slide-container");

export function carousel() {
  window.addEventListener("load", () => {
    slideContainer.scrollLeft -= 9999;
  });

  backButton.addEventListener("click", () => {
    slideContainer.scrollLeft -= slideContainer.clientWidth;

    setTimeout(() => {
      if (slideContainer.scrollLeft <= 9) {
        backButton.style.opacity = "0.2";
        backButton.style.cursor = "default";
      }
      if (slideContainer.scrollLeft <= 3999) {
        forwardButton.style.opacity = "1";
        forwardButton.style.cursor = "pointer";
      }
    }, 500);
  });
  forwardButton.addEventListener("click", () => {
    slideContainer.scrollLeft += slideContainer.clientWidth;

    setTimeout(() => {
      if (slideContainer.scrollLeft >= 10) {
        backButton.style.opacity = "1";
        backButton.style.cursor = "pointer";
      }
      if (slideContainer.scrollLeft >= 4000) {
        forwardButton.style.opacity = "0.2";
        forwardButton.style.cursor = "default";
      }
    }, 500);
  });
}
