'use strict';

import polyfills from './libraries/polyfills';
import LeftMenu from "../../components/nav/nav";
import Tabs from "../../components/tabs/tabs";
import Slider from "../../components/slider/slider";
import Popup from '../../components/popup/popup';
import Validation from '../../components/login-form/input-validation';
import LoginForm from "../../components/login-form/login-form";

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    new LeftMenu();

    Slider.init();
    Popup.init();
    Validation.init();
    LoginForm.init();
    Tabs.init(document.querySelector('.tabs'));

    $('.slider').slider(800);
});
