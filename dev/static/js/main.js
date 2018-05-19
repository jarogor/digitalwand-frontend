webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _polyfills = __webpack_require__(1);
	
	var _polyfills2 = _interopRequireDefault(_polyfills);
	
	var _nav = __webpack_require__(3);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _tabs = __webpack_require__(4);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _slider = __webpack_require__(5);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _popup = __webpack_require__(6);
	
	var _popup2 = _interopRequireDefault(_popup);
	
	var _inputValidation = __webpack_require__(7);
	
	var _inputValidation2 = _interopRequireDefault(_inputValidation);
	
	var _loginForm = __webpack_require__(8);
	
	var _loginForm2 = _interopRequireDefault(_loginForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	    _polyfills2.default.init();
	    // ================ Здесь инициализируем модули =====================
	
	    new _nav2.default();
	
	    _slider2.default.init();
	    _popup2.default.init();
	    _inputValidation2.default.init();
	    _loginForm2.default.init();
	    _tabs2.default.init(document.querySelector('.tabs'));
	
	    $('.slider').slider(800);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _svg4everybody = __webpack_require__(2);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    init: function init() {
	        (0, _svg4everybody2.default)();
	    }
	};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LeftMenu = function LeftMenu() {
	    var _this = this;
	
	    _classCallCheck(this, LeftMenu);
	
	    this.navBox = $('.nav');
	    this.navClose = $('.nav__close');
	    this.navOpen = $('.nav-hamburger__icon');
	
	    this.navOpen.click(function () {
	        _this.navBox.addClass('nav_show');
	    });
	
	    this.navClose.click(function () {
	        _this.navBox.removeClass('nav_show');
	    });
	};
	
	exports.default = LeftMenu;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    init: function init(tabs) {
	        tabs.addEventListener('click', function (event) {
	
	            var items = [].slice.call(document.querySelectorAll('.tabs-content__item'));
	            var itemActive = document.querySelector('.tabs__item_active');
	
	            if (!event.target.classList.contains('tabs__item')) {
	                return;
	            }
	
	            itemActive.classList.remove('tabs__item_active');
	            event.target.classList.add('tabs__item_active');
	
	            items.forEach(function (item) {
	                if (item.dataset.id === event.target.dataset.id) {
	                    item.classList.add('tabs-content__item_active');
	                } else {
	                    item.classList.remove('tabs-content__item_active');
	                }
	            });
	        });
	    }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    init: function init() {
	
	        $.fn.slider = function (speed) {
	            speed = speed || 300;
	
	            var items = void 0,
	                itemWidth = void 0;
	            var maxWidth = 1100;
	            var itemsCount = $('.slider__item').length;
	            var slider = $('.slider__box');
	
	            sizeInit();
	
	            $(this).find('.slider__previous').click(function () {
	                moveSlide();
	            });
	
	            $(this).find('.slider__next').click(function () {
	                moveSlide(true);
	            });
	
	            $(window).resize(function () {
	                sizeInit();
	            });
	
	            function moveSlide(next) {
	                next = next || false;
	                sizeInit();
	
	                slider.css({
	                    width: itemWidth * itemsCount
	                });
	
	                if (!next) {
	                    items.last().prependTo(slider);
	                    slider.css({
	                        left: -itemWidth
	                    });
	                }
	
	                slider.animate({
	                    left: next ? -itemWidth : 0
	                }, speed, function () {
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
	                itemWidth = document.body.offsetWidth < maxWidth ? document.body.offsetWidth : maxWidth;
	
	                items.width(itemWidth);
	            }
	        };
	    }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    init: function init() {
	        $.fn.popup = function (data) {
	            var _this = this;
	
	            data = data || { title: "Emty Title", content: "Empty Content" };
	
	            $(this).find('.popup__close').click(function () {
	                $(_this).removeClass('popup_show');
	            });
	
	            $(this).find('.popup__bg').click(function () {
	                $(_this).removeClass('popup_show');
	            });
	
	            if (data.title) {
	                $(this).find('.popup__title').html(data.title);
	            }
	
	            if (data.content) {
	                $(this).find('.popup__body').html(data.content);
	            }
	
	            return this;
	        };
	    }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    init: function init() {
	        $.fn.validation = function (data) {
	            var value = $(this).val();
	            var $this = $(this);
	
	            if (data.email) {
	                var regex = /^[\w\d\.\-]{2,}\@[\w\d\.\-]{2,}\.[\w\d]{2,}$/;
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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    init: function init() {
	        var popup = $('.popup').popup({
	            title: "Авторизация",
	            content: $('.login-form').html()
	        });
	
	        $('.nav__userMenu .js_login').click(function () {
	            popup.addClass('popup_show');
	        });
	
	        $('.popup .login-form__submit').click(function () {
	            var $email = $('.popup .login-form__email').validation({ email: true });
	            var $password = $('.popup .login-form__password').validation({ password: true });
	
	            if ($email && $password) {
	                $('.popup').removeClass('popup_show');
	            }
	        });
	    }
	};

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9saWJyYXJpZXMvcG9seWZpbGxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL25hdi9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvbG9naW4tZm9ybS9pbnB1dC12YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5qcyJdLCJuYW1lcyI6WyIkIiwicG9seWZpbGxzIiwiaW5pdCIsIkxlZnRNZW51IiwiU2xpZGVyIiwiUG9wdXAiLCJWYWxpZGF0aW9uIiwiTG9naW5Gb3JtIiwiVGFicyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlciIsIm5hdkJveCIsIm5hdkNsb3NlIiwibmF2T3BlbiIsImNsaWNrIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRhYnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpdGVtcyIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtQWN0aXZlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwiaXRlbSIsImRhdGFzZXQiLCJpZCIsImZuIiwic3BlZWQiLCJpdGVtV2lkdGgiLCJtYXhXaWR0aCIsIml0ZW1zQ291bnQiLCJsZW5ndGgiLCJzaXplSW5pdCIsImZpbmQiLCJtb3ZlU2xpZGUiLCJ3aW5kb3ciLCJyZXNpemUiLCJuZXh0IiwiY3NzIiwid2lkdGgiLCJsYXN0IiwicHJlcGVuZFRvIiwibGVmdCIsImFuaW1hdGUiLCJmaXJzdCIsImFwcGVuZFRvIiwiYm9keSIsIm9mZnNldFdpZHRoIiwicG9wdXAiLCJkYXRhIiwidGl0bGUiLCJjb250ZW50IiwiaHRtbCIsInZhbGlkYXRpb24iLCJ2YWx1ZSIsInZhbCIsIiR0aGlzIiwiZW1haWwiLCJyZWdleCIsImlzVmFsaWQiLCJ0ZXN0IiwicGFzc3dvcmQiLCJlcnJvciIsIiRlbWFpbCIsIiRwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsR0FBRSxZQUFNO0FBQ0pDLHlCQUFVQyxJQUFWO0FBQ0E7O0FBRUEsU0FBSUMsYUFBSjs7QUFFQUMsc0JBQU9GLElBQVA7QUFDQUcscUJBQU1ILElBQU47QUFDQUksK0JBQVdKLElBQVg7QUFDQUsseUJBQVVMLElBQVY7QUFDQU0sb0JBQUtOLElBQUwsQ0FBVU8sU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFWOztBQUVBVixPQUFFLFNBQUYsRUFBYVcsTUFBYixDQUFvQixHQUFwQjtBQUNILEVBYkQsRTs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7OzttQkFFZTtBQUNYVCxTQURXLGtCQUNKO0FBQ0g7QUFDSDtBQUhVLEU7Ozs7Ozs7QUNGZjs7Ozs7Ozs7S0FFcUJDLFEsR0FDakIsb0JBQWM7QUFBQTs7QUFBQTs7QUFDVixVQUFLUyxNQUFMLEdBQWNaLEVBQUUsTUFBRixDQUFkO0FBQ0EsVUFBS2EsUUFBTCxHQUFnQmIsRUFBRSxhQUFGLENBQWhCO0FBQ0EsVUFBS2MsT0FBTCxHQUFlZCxFQUFFLHNCQUFGLENBQWY7O0FBRUEsVUFBS2MsT0FBTCxDQUFhQyxLQUFiLENBQW1CLFlBQU07QUFDckIsZUFBS0gsTUFBTCxDQUFZSSxRQUFaLENBQXFCLFVBQXJCO0FBQ0gsTUFGRDs7QUFJQSxVQUFLSCxRQUFMLENBQWNFLEtB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VUFBVUMsU0FBYixFQUF3QjtBQUNwQnpFLG1CQUFFLFFBQUYsRUFBWWlCLFdBQVosQ0FBd0IsWUFBeEI7QUFDSDtBQUNKLFVBUEQ7QUFRSDtBQW5CVSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgcG9seWZpbGxzIGZyb20gJy4vbGlicmFyaWVzL3BvbHlmaWxscyc7XHJcbmltcG9ydCBMZWZ0TWVudSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXYvbmF2XCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RhYnMvdGFic1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXJcIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAnO1xyXG5pbXBvcnQgVmFsaWRhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvZ2luLWZvcm0vaW5wdXQtdmFsaWRhdGlvbic7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtXCI7XHJcblxyXG4kKCgpID0+IHtcclxuICAgIHBvbHlmaWxscy5pbml0KCk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09INCX0LTQtdGB0Ywg0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQvNC+0LTRg9C70LggPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbmV3IExlZnRNZW51KCk7XHJcblxyXG4gICAgU2xpZGVyLmluaXQoKTtcclxuICAgIFBvcHVwLmluaXQoKTtcclxuICAgIFZhbGlkYXRpb24uaW5pdCgpO1xyXG4gICAgTG9naW5Gb3JtLmluaXQoKTtcclxuICAgIFRhYnMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicycpKTtcclxuXHJcbiAgICAkKCcuc2xpZGVyJykuc2xpZGVyKDgwMCk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanMiLCJpbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvc3RhdGljL2pzL2xpYnJhcmllcy9wb2x5ZmlsbHMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0TWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hdkJveCA9ICQoJy5uYXYnKTtcclxuICAgICAgICB0aGlzLm5hdkNsb3NlID0gJCgnLm5hdl9fY2xvc2UnKTtcclxuICAgICAgICB0aGlzLm5hdk9wZW4gPSAkKCcubmF2LWhhbWJ1cmdlcl9faWNvbicpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdk9wZW4uY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hdkJveC5hZGRDbGFzcygnbmF2X3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZDbG9zZS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Qm94LnJlbW92ZUNsYXNzKCduYXZfc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9jb21wb25lbnRzL25hdi9uYXYuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAodGFicykge1xyXG4gICAgICAgIHRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicy1jb250ZW50X19pdGVtJykpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnNfX2l0ZW1fYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiggISBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJzX19pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXRlbUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgndGFic19faXRlbV9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXRhc2V0LmlkID09PSBldmVudC50YXJnZXQuZGF0YXNldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndGFicy1jb250ZW50X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnMtY29udGVudF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQuZm4uc2xpZGVyID0gZnVuY3Rpb24gKHNwZWVkKSB7XHJcbiAgICAgICAgICAgIHNwZWVkID0gc3BlZWQgfHwgMzAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW1zLCBpdGVtV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFdpZHRoID0gMTEwMDtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zQ291bnQgPSAkKCcuc2xpZGVyX19pdGVtJykubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgc2xpZGVyID0gJCgnLnNsaWRlcl9fYm94Jyk7XHJcblxyXG4gICAgICAgICAgICBzaXplSW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2xpZGVyX19wcmV2aW91cycpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vdmVTbGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNsaWRlcl9fbmV4dCcpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vdmVTbGlkZSh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNpemVJbml0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dCB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNpemVJbml0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGl0ZW1XaWR0aCAqIGl0ZW1zQ291bnRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghIG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5sYXN0KCkucHJlcGVuZFRvKHNsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC1pdGVtV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IG5leHQgPyAtaXRlbVdpZHRoIDogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuZmlyc3QoKS5hcHBlbmRUbyhzbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2l6ZUluaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcyA9ICQoJy5zbGlkZXJfX2l0ZW0nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCBtYXhXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIDogbWF4V2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbXMud2lkdGgoaXRlbVdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0OiAoKSA9PiB7XHJcbiAgICAgICAgJC5mbi5wb3B1cCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhIHx8IHt0aXRsZTogXCJFbXR5IFRpdGxlXCIsIGNvbnRlbnQ6IFwiRW1wdHkgQ29udGVudFwifTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnBvcHVwX19jbG9zZScpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BvcHVwX3Nob3cnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5wb3B1cF9fYmcnKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwb3B1cF9zaG93Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoZGF0YS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcucG9wdXBfX3RpdGxlJykuaHRtbChkYXRhLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZGF0YS5jb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5wb3B1cF9fYm9keScpLmh0bWwoZGF0YS5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQ6ICgpID0+IHtcclxuICAgICAgICAkLmZuLnZhbGlkYXRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IC9eW1xcd1xcZFxcLlxcLV17Mix9XFxAW1xcd1xcZFxcLlxcLV17Mix9XFwuW1xcd1xcZF17Mix9JC87XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZChyZWdleC50ZXN0KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzVmFsaWQoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9jb21wb25lbnRzL2xvZ2luLWZvcm0vaW5wdXQtdmFsaWRhdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwb3B1cCA9ICQoJy5wb3B1cCcpLnBvcHVwKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi0JDQstGC0L7RgNC40LfQsNGG0LjRj1wiLFxyXG4gICAgICAgICAgICBjb250ZW50OiAkKCcubG9naW4tZm9ybScpLmh0bWwoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubmF2X191c2VyTWVudSAuanNfbG9naW4nKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLmFkZENsYXNzKCdwb3B1cF9zaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5wb3B1cCAubG9naW4tZm9ybV9fc3VibWl0JykuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgJGVtYWlsID0gJCgnLnBvcHVwIC5sb2dpbi1mb3JtX19lbWFpbCcpLnZhbGlkYXRpb24oe2VtYWlsOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGxldCAkcGFzc3dvcmQgPSAkKCcucG9wdXAgLmxvZ2luLWZvcm1fX3Bhc3N3b3JkJykudmFsaWRhdGlvbih7cGFzc3dvcmQ6IHRydWV9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKCRlbWFpbCAmJiAkcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICQoJy5wb3B1cCcpLnJlbW92ZUNsYXNzKCdwb3B1cF9zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uanMiXSwic291cmNlUm9vdCI6IiJ9