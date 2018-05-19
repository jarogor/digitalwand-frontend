'use strict';

export default {
    init: function () {
        const popup = $('.popup').popup({
            title: "Авторизация",
            content: $('.login-form').html()
        });

        $('.nav__userMenu .js_login').click(() => {
            popup.addClass('popup_show');
        });

        $('.popup .login-form__submit').click(() => {
            let $email = $('.popup .login-form__email').validation({email: true});
            let $password = $('.popup .login-form__password').validation({password: true});

            if($email && $password) {
                $('.popup').removeClass('popup_show');
            }
        });
    }
};