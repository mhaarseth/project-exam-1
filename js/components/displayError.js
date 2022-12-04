export function displayError(error) {
  const pageContent = document.querySelector(".page-content");
  const main = document.querySelector(".main");
  const errorMessage = document.querySelector(".error-message");
  pageContent.style.visibility = "hidden";

  main.style.margin = "0 auto";
  errorMessage.style.display = "block";

  errorMessage.innerHTML = `
<p>${error}<p>
<p>Try reloading..<p>
`;

  console.log(error);
}
