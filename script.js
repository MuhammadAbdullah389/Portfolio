let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("ul");

hamburger.addEventListener("click", () => {
    // Check the current display style and toggle it
    if (menu.style.display === "flex") {
        menu.style.display = "none"; // Hide the menu
    } else {
        menu.style.display = "flex"; // Show the menu
    }
});