'use strict';

export default {
    init: function (tabs) {
        tabs.addEventListener('click', (event) => {

            const items = [].slice.call(document.querySelectorAll('.tabs-content__item'));
            const itemActive = document.querySelector('.tabs__item_active');

            if( ! event.target.classList.contains('tabs__item')) {
                return;
            }

            itemActive.classList.remove('tabs__item_active');
            event.target.classList.add('tabs__item_active');

            items.forEach(item => {
                if (item.dataset.id === event.target.dataset.id) {
                    item.classList.add('tabs-content__item_active');
                } else {
                    item.classList.remove('tabs-content__item_active');
                }
            });
        });
    }
}