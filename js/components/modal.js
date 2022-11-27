export function modal() {
  const images = document.querySelectorAll(".single-post-image-img");
  let imgSrc = "";

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      imgSrc = e.target.src;
      console.log(imgSrc);

      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      document.querySelector(".single-post-container").append(modal);

      const modalImage = document.createElement("img");
      modalImage.setAttribute("src", imgSrc);
      modal.append(modalImage);

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    });
  });
}
