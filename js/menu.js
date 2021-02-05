$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $(".sticky").addClass("sticky--shadow");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".sticky").removeClass("sticky--shadow");
        }
    });

    // This media query targets viewports that have a minimum width of 320px
    const mQuery = window.matchMedia("(max-width: 768px)");
    var element = document.getElementsByClassName("menu__list");
    var btn = document.getElementsByClassName("menu__btn");
    var line = document.getElementsByClassName("menu__line");
    var dropdown = document.getElementsByClassName("dropdown");
    var footer__content = document.getElementsByClassName("footer__content");
    var footer__links = document.getElementsByClassName("footer__links");
    var dropdown__list = document.getElementsByClassName("dropdown__list");

    function handleMobilePhoneResize(e) {
        // Check if the media query is true
        if (window.matchMedia("(max-width: 768px)").matches) {
            btn[0].classList.remove("menu__btn--hidden");

            footer__content[0].classList.add("c-column");

            element[0].classList.add("menu--burger", "list--hidden");

            footer__links[0].classList.add("c-column");

            dropdown[0].classList.add("dropdown");

            for (var i = 0, n = dropdown__list.length; i < n; i++) {
                dropdown__list[i].classList.add("dropdown__content");
            }
        } else if (window.matchMedia("(min-width: 769px)").matches) {
            btn[0].classList.add("menu__btn--hidden");

            footer__content[0].classList.remove("c-column");

            dropdown[0].classList.add("dropdown");

            element[0].classList.remove("menu--burger", "list--hidden");

            for (var i = 0, n = dropdown__list.length; i < n; i++) {
                dropdown__list[i].classList.remove("dropdown__content");
            }

            footer__links[0].classList.remove("c-column");
            // alert("2");
        }
    }

    // Set up event listener
    mQuery.addListener(handleMobilePhoneResize);

    var acc = document.getElementsByClassName("dropdown");
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // $(".dropdown").click(function (event) {
    //     // var element = document.getElementsByClassName("dropdown__content");
    //     // $(this).next().toggle("down");

    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //         panel.style.maxHeight = null;
    //     } else {
    //         panel.style.maxHeight = panel.scrollHeight + "px";
    //     }
    //     /* whatever you want to do here */
    // });
    $(".menu__btn").click(function (event) {
        var element = document.getElementsByClassName("menu__list");
        // var s = document.getElementsByClassName("q");
        // alert("fuk");
        line[0].classList.toggle("menu__line-active");
        element[0].classList.toggle("list--hidden");
        /* whatever you want to do here */
    });
});
