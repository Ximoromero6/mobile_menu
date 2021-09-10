(function () {

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
    let header = document.querySelector("header#header");

    window.addEventListener("scroll", function () {
        let scrollPage = window.pageYOffset || document.documentElement.scrollTop;

        scrollPage > 0 ? header.classList.add("scrolled") : header.classList.remove("scrolled");

    }, false);

    //ScrollReveal
    ScrollReveal().reveal("body > main > h1:nth-child(1)", {
        delay: 200
    });

    ScrollReveal().reveal("body > main > p:nth-child(2)", {
        delay: 500
    });

    ScrollReveal().reveal("body > main > img:nth-child(3)", {
        delay: 1000
    });

    /* document.querySelectorAll(".fadeup-enter").forEach((el) => {
        el.addEventListener("animationend", () => {
            el.classList.add("done");
        })
    }); */

})();