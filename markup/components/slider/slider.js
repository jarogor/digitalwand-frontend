'use strict';

export default {
    init: function () {

        $.fn.slider = function (speed) {
            speed = speed || 300;

            let items, itemWidth;
            const maxWidth = 1100;
            let itemsCount = $('.slider__item').length;
            let slider = $('.slider__box');

            sizeInit();

            $(this).find('.slider__previous').click(() => {
                moveSlide();
            });

            $(this).find('.slider__next').click(() => {
                moveSlide(true);
            });

            $(window).resize(() => {
                sizeInit();
            });


            function moveSlide(next) {
                next = next || false;
                sizeInit();

                slider.css({
                    width: itemWidth * itemsCount
                });

                if (! next) {
                    items.last().prependTo(slider);
                    slider.css({
                        left: -itemWidth
                    });
                }

                slider.animate({
                        left: next ? -itemWidth : 0
                    },
                    speed,
                    () => {
                        if (next) {
                            items.first().appendTo(slider);
                            slider.css({
                                left: '0'
                            });
                        }
                    });
            }


            function sizeInit() {
                items = $('.slider__item');
                itemWidth = document.body.offsetWidth < maxWidth
                    ? document.body.offsetWidth
                    : maxWidth;

                items.width(itemWidth);
            }
        };
    }
};
