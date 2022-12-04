export function modal() {
  const images = document.querySelectorAll(".single-post-image-img");
  let imgSrc = "";

  images.forEach((img) => {
    img.addEventListener("click", (event) => {
      sessionStorage.setItem("altText", img.alt);
      imgSrc = event.target.src;

      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      document.querySelector(".single-post-container").append(modal);

      const modalImage = document.createElement("img");
      modalImage.setAttribute("src", imgSrc);
      modalImage.setAttribute("alt", sessionStorage.getItem("altText"));
      modal.append(modalImage);

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.remove();
        }
      });
    });
  });
}
