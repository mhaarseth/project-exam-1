const showMorePostsButton = document.querySelector(".show-more-posts-button");

export function scrollDownPage() {
  showMorePostsButton.addEventListener("click", () => {
    setTimeout(() => {
      window.scrollBy({
        top: showMorePostsButton.scrollIntoView(false),
        left: 0,
        behavior: "smooth",
      });
    }, 450);
  });
}
