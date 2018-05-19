'header': {
        default: {
            title: 'Главная страница'
        }
    }
,

'loginForm': {
        user: {
            label: "Email"
        },
        submit: {
            label: "Вход"
        }
    }
,

'nav': {
        mainMenu:
            [
                {
                    link: "javascript:void(0)",
                    text: "USA site"
                },
                {
                    link: "javascript:void(0)",
                    text: "Deutsch site"
                },
                {
                    label: "Россия",
                    link: "javascript:void(0)",
                    text: "Switch to english"
                }
            ],

        userMenu:
            [
                {
                    icon: "clock",
                    link: "javascript:void(0)",
                    text: "Онлайн-табло"
                },
                {
                    link: "javascript:void(0)",
                    text: "Вход и регистрация",
                    className: "js_login"
                }
            ]
    }
,

'popup': {
        title: "Popup Title",
        content: "Popup Content"
    }

,

'searchForm': {
        default: {
            label: 'Поиск по сайту'
        }
    }
,

'slider': {
        items: [
            { url: 'static/img/content/slides/1.jpg' },
            { url: 'static/img/content/slides/2.jpg' },
            { url: 'static/img/content/slides/3.jpg' },
            { url: 'static/img/content/slides/4.jpg' }
        ]
    }
,

'tabs': {
        items: [
            {
                id: 1,
                name: 'Возможности',
                content: 'Текст раздела "Возможности"',
                active: true
            },
            {
                id: 2,
                name: 'Информация',
                content: 'Текст раздела "Информация"'
            },
            {
                id: 3,
                name: 'Привилегии',
                content: 'Текст раздела "Привилегии"'
            }
        ]
    }
,

/* Module data structure */

// moduleName: {
//     dataType: {
//         property: value
//     }
// }

/* Module data example */

_template: {
    big: {
        title: 'Hello world',
        age: 10,
        button: false
    }
},

__iconsData: {
    
        'clock': {
            width: '20px',
            height: '20px'
        },
    
        'search': {
            width: '20px',
            height: '20px'
        },
    
},

__pages: [{
                name: 'index',
                href: 'index.html'
             }]