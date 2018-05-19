'use strict';

export default {
    init: () => {
        $.fn.popup = function (data) {
            data = data || {title: "Emty Title", content: "Empty Content"};

            $(this).find('.popup__close').click(() => {
                $(this).removeClass('popup_show');
            });

            $(this).find('.popup__bg').click(() => {
                $(this).removeClass('popup_show');
            });

            if(data.title) {
                $(this).find('.popup__title').html(data.title);
            }

            if(data.content) {
                $(this).find('.popup__body').html(data.content);
            }

            return this;
        };
    }
};