(function() {
    let menu = document.querySelector("#menu"),
        overlay_menu = document.querySelector(".overlay_menu_mobile"),
        open_menu_button = document.querySelector("#open_menu_button");

    open_menu_button.addEventListener("click", () => {
        menu.classList.add("open");
        document.body.classList.add("disableScroll");
        overlay_menu.classList.remove("hidden");
    });

    overlay_menu.addEventListener("click", (el) => {
        el.target.classList.add("hidden");
        menu.classList.remove("open");
        document.body.classList.remove("disableScroll");
    });

    //Dark mode
    const change_theme_button = document.querySelector("#switch");

    change_theme_button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        change_theme_button.classList.toggle("active-bg");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("dark-mode", "true");
        } else {
            localStorage.setItem("dark-mode", "false");
        }
    });

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark");
        change_theme_button.classList.add("active-bg");
        change_theme_button.checked = true;
    } else {
        document.body.classList.remove("dark");
        change_theme_button.classList.remove("active-bg");
        change_theme_button.checked = false;
    }

    //Detectar scroll
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        console.log(st);
        if (st > lastScrollTop) {

        } else {

        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

})();