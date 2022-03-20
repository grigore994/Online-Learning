// Implement functionality for header/menu on all pages
function handleBurgerMenuFn() {
    let x = document.getElementById("myTopNav");
    let openIcon = document.getElementById("open-hamburger-menu-icon");
    let closeIcon = document.getElementById("close-hamburger-menu-icon");
    if (x.className === "base-container header-container top-nav") {
        openIcon.style.display = "none";
        closeIcon.style.display = "inherit";
        x.className += " responsive";
    } else {
        x.className = "base-container header-container top-nav";
        openIcon.style.display = "inherit";
        closeIcon.style.display = "none";
    }
}