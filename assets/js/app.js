(function() {
    let menu = document.querySelector("#menu"),
        overlay_menu = document.querySelector(".overlay_menu_mobile"),
        open_menu_button = document.querySelector("#open_menu_button");

    open_menu_button.addEventListener("click", () => {
        menu.classList.add("open");
        overlay_menu.classList.remove("hidden");
    });

    overlay_menu.addEventListener("click", (el) => {
        el.target.classList.add("hidden");
        menu.classList.remove("open");
    });

})();