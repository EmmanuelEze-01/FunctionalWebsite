const toggleMenu = document.getElementById("toggle-menu");
const menuBtn = document.getElementById("menu-btn");
const togglelinks = document.querySelectorAll(".tglink");
let toggleMenuOpen = false; // Added 'let' to avoid global leak
function menuToggle() {
  if (toggleMenuOpen == false) {
    toggleMenu.style.top = "80px";
    menuBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
    toggleMenuOpen = true;
  } else {
    closeToggleMenu();
  }
}

togglelinks.forEach((element) => {
  element.addEventListener("click", closeToggleMenu);
});

function closeToggleMenu() {
  toggleMenu.style.top = "-330px";
  menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  toggleMenuOpen = false;
}

let themeNo = 1;
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", themeChanging);
function themeChanging() {
  themeNo += 1;

  if (themeNo > 3) {
    themeNo = 1;
  }

  if (themeNo == 1) {
    themeOne();
    console.log("Theme One");
  } else if (themeNo == 2) {
    themeTwo();
    console.log("Theme Two");
  } else {
    themeThree();
    console.log("Theme Three");
  }
}

function themeOne() {
  document.body.style.setProperty("--bg-main", "#070d19");
  document.body.style.setProperty("--bg-navbar", "#0b1629");
  document.body.style.setProperty("--bg-dropdown", "#0b1629");
  document.body.style.setProperty("--bg-card", "#0b1629");
  document.body.style.setProperty("--border-color", "#24334b");
  document.body.style.setProperty("--btn-primary", "#635bff");
  document.body.style.setProperty("--link-active", "#635bff");
  document.body.style.setProperty("--icon-color", "#635bff");
  document.body.style.setProperty("--hover-color", "#a5b4fc");
  document.body.style.setProperty("--text-primary", "#f8fafc");
  document.body.style.setProperty("--text-secondary", "#a5b4fc");
  document.body.style.setProperty(
    "--bg-image",
    "url(Images/Backgroundone.png)",
  );
}

function themeTwo() {
  document.body.style.setProperty("--bg-main", "#FFF7ED");
  document.body.style.setProperty("--bg-navbar", "#FFFFFF");
  document.body.style.setProperty("--bg-dropdown", "#FFFFFF");
  document.body.style.setProperty("--bg-card", "#FFFFFF");
  document.body.style.setProperty("--border-color", "#F3E8D8");
  document.body.style.setProperty("--btn-primary", "#FF7417");
  document.body.style.setProperty("--link-active", "#FF7417");
  document.body.style.setProperty("--icon-color", "#FF7417");
  document.body.style.setProperty("--hover-color", "#FFEDD5");
  document.body.style.setProperty("--text-primary", "#334155");
  document.body.style.setProperty("--text-secondary", "#64748B");
  document.body.style.setProperty(
    "--bg-image",
    "url(Images/Backgroundtwo.png)",
  );
}

function themeThree() {
  document.body.style.setProperty("--bg-main", "#080D2A");
  document.body.style.setProperty("--bg-navbar", "#1E1B4B");
  document.body.style.setProperty("--bg-dropdown", "#1E1B4B");
  document.body.style.setProperty("--bg-card", "#3B0764");
  document.body.style.setProperty("--border-color", "#3B0764");
  document.body.style.setProperty("--btn-primary", "#6D28D9");
  document.body.style.setProperty("--link-active", "#A855F7");
  document.body.style.setProperty("--icon-color", "#A855F7");
  document.body.style.setProperty("--hover-color", "#EC4899");
  document.body.style.setProperty("--text-primary", "#F8FAFC");
  document.body.style.setProperty("--text-secondary", "#C4B5FD");
  document.body.style.setProperty(
    "--bg-image",
    "url(Images/Backgroundthree.png)",
  );
}
