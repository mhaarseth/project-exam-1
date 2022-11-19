const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".open-menu-button");
const closeMenu = document.querySelector(".close-menu-button");

export function toggleMenuOn() {
  hamburgerMenu.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
}

export function toggleMenuOff() {
  hamburgerMenu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
}

openMenu.addEventListener("click", toggleMenuOn);
closeMenu.addEventListener("click", toggleMenuOff);
