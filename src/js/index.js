/*Навигация - смена пунктов при скроллинге*/
$('a[href^="#"]').click(function () {
    let valHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 60 + 'px'
    });
});


/*Скроллинг*/
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $('section[id^="nav_"]').each((i, el) => {

        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $('nav a').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });

            $('nav li:eq(' + i + ')').find('a').addClass('active');
        };
    });
});

/*Parallax*/
var myVar;
            function myFunction() {
                myVar = setTimeout(showPage, 1000);
            }
            function showPage() {
                document.getElementById("loader").style.display = "none";
                document.getElementById("myDiv").style.display = "block";
            }

/*Magnific popup*/
$('.image-link').magnificPopup({
    type:'image',
    fixedContentPos: false
});

/*Всплывающее окно о скидке*/
var toastLiveExample = document.getElementById('liveToast');
setTimeout(() => {
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
}, 10000);


/*Анимация при прокрутке*/
let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
elements.each((i, el) => {
    observer.observe(el);
});

/*Смена на качественные изображения*/
let imgElements = $('img');
imgElements.each((i, el) => {
    observer.observe(el);
});

let i = 0;
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
            change.target.src = change.target.dataset.src;

            /*Бегающие цифры, статистика*/
            if (change.target == document.getElementById('counter') && i == 0) {
                i = 1;
                runNum();
            };
        };
    });
};

/*Калькулятор цены*/
let priceOptions = {
    siteType: [0, 1100, 5000, 2000, 4500, 5600, 4500, 3000, 2400, 2200, 3400, 2500],
    design: [0, 600, 900, 2500, 1900, 1600, 1400],
    adaptivity: [0, 500, 700, 1100, 800, 700]
};

let timeOptions = {
    siteType: [0, 3, 10, 6, 10, 12, 10, 8, 8, 10, 8, 8],
    design: [0, 1, 1, 3, 2, 2, 2],
    adaptivity: [0, 1, 1, 1, 1, 1]
};

function priceInit() {
    document.getElementById('totalPrice').innerHTML = priceOptions.siteType[$('#site_type option:selected').val()] +
        priceOptions.design[$('#design option:selected').val()] +
        priceOptions.adaptivity[$('#adaption option:selected').val()] +
        ' ₽';
}

function timeInit() {
    document.getElementById('totalTime').innerHTML = timeOptions.siteType[$('#site_type option:selected').val()] +
        timeOptions.design[$('#design option:selected').val()] +
        timeOptions.adaptivity[$('#adaption option:selected').val()] +
        ' суток';
}


 /*Бегающие цифры, статистика*/
 function runNum() {
    $('#counter li div').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
    
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
 }


/*Слайдер для отзывов*/
const sliderLine = document.querySelector('.reviews');

function reselectDot(dot) {
    $('.reviewImg').toggleClass('show-animation');
    $('.text').toggleClass('show-animation');
    sliderLine.style.left = -100 * (parseInt(dot.match(/\d+/)) - 1) + '%';
    $('#dots button').each((i, el) => {
        if ($(el).hasClass('selected')) {
            $(el).removeClass('selected');

        }
    });
    $('.revBut_' + parseInt(dot.match(/\d+/))).addClass('selected');
}

/*Валидация*/
$("#phone").mask("+7(999) 999-9999");

/*WOW*/
new WOW().init();



