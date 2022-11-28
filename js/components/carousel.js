const backButton = document.querySelector(".back-button");
const forwardButton = document.querySelector(".forward-button");
const slideContainer = document.querySelector(".home-content-container");

export function carousel() {
  backButton.addEventListener("click", () => {
    slideContainer.scrollLeft -= slideContainer.clientWidth;

    setTimeout(() => {
      if (slideContainer.scrollLeft <= 9) {
        backButton.style.display = "none";
      }
    }, 700);
  });
  forwardButton.addEventListener("click", () => {
    slideContainer.scrollLeft += slideContainer.clientWidth;

    setTimeout(() => {
      if (slideContainer.scrollLeft >= 10) {
        backButton.style.display = "flex";
      }
    }, 700);
  });
}
