'use strict';

export default {
    init: () => {
        $.fn.validation = function (data) {
            const value = $(this).val();
            const $this = $(this);

            if (data.email) {
                const regex = /^[\w\d\.\-]{2,}\@[\w\d\.\-]{2,}\.[\w\d]{2,}$/;
                return isValid(regex.test(value));
            }

            if (data.password) {
                return isValid(value);
            }

            function isValid(error) {
                if (error) {
                    $this.removeClass('error');
                    return true;
                } else {
                    $this.addClass('error');
                    return false;
                }
            }
        };
    }
};