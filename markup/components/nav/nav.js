'use strict';

export default class LeftMenu {
    constructor() {
        this.navBox = $('.nav');
        this.navClose = $('.nav__close');
        this.navOpen = $('.nav-hamburger__icon');

        this.navOpen.click(() => {
            this.navBox.addClass('nav_show');
        });

        this.navClose.click(() => {
            this.navBox.removeClass('nav_show');
        });
    }
}
