let tabs = document.querySelectorAll('.tab-switch li');
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll('.tabs-content > div');
let divsArray = Array.from(divs);

$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    tabsArray.forEach((ele) => {
        ele.addEventListener("click", function (e) {
            tabs.forEach((ele) => {
                ele.classList.remove('selected')
            });
            e.currentTarget.classList.add('selected')
            divsArray.forEach((div) => {
                div.style.display = "none"
            });
            document.querySelector(e.currentTarget.dataset.class).style.display = "block"
        });
    });
});