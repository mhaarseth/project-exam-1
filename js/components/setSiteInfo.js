const url = "https://mhaarseth.no/flower-power/wp-json/";

const blogTitle = document.querySelector(".blog-title");
const aboutImageContainer = document.querySelector(".about-image-container");
const favIcon = document.getElementById("favicon");
const currentPage = document.querySelector(".current-page");
//const blogDescription = document.querySelector(".blog-description");

export async function setSiteInfo() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const wpBlogTitle = result.name;
    const wpAboutImage = result.site_icon_url;

    //const wpBlogDescription = result.description;

    favIcon.setAttribute("href", `${wpAboutImage}`);
    blogTitle.innerHTML = `
    ${wpBlogTitle}
    `;

    if (currentPage.innerText === "about") {
      aboutImageContainer.innerHTML = `
    <img
          src="${wpAboutImage}"
          alt="DALL-E's interpetation of the title of this blog, a candle out of focus"
          class="about-image-img"
        />
    
    `;
    }

    /*
    blogDescription.innerHTML = `
    ${wpBlogDescription}
    `;
    */
  } catch (error) {
    console.log(error);
  }
}
