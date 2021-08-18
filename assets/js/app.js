(function() {
let menu = document.querySelector("#menu"),
    overlay_menu = document.querySelector(".overlay_menu_mobile");

document.querySelector("#open_menu_button").addEventListener("click", () => {
    menu.classList.add("open");
    overlay_menu.classList.remove("hidden");
});

overlay_menu.addEventListener("click", () => {
    this.classList.add("hidden");
    menu.classList.remove("open");
});
})();
