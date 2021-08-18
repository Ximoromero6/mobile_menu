let menu = document.querySelector("#menu");

document.querySelector("#open_menu_button").addEventListener("click", () => {
    menu.classList.add("open");
});

document.querySelector(".overlay_menu_mobile").addEventListener("click", () => {
    menu.classList.remove("open");
});