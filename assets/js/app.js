let menu = document.querySelector("#menu"),
    overlay_menu = document.querySelector(".overlay_menu_mobile");

document.querySelector("#open_menu_button").addEventListener("click", () => {
    overlay_menu.classList.remove("hidden");
    menu.classList.add("open");
});

overlay_menu.addEventListener("click", (el) => {
    overlay_menu.classList.add("hidden");
    menu.classList.remove("open");
});