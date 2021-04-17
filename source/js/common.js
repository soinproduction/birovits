// -----------------  Слайдера --------------------

const Sliders = {
  INFORM: {
    ELEMENT: $('.inform-slider'),
    SETTINGS: {
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
      nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
      dotsClass: "baner-slider__dots",
      responsive: [{
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
      ],
    },
    BREAKPOINT: 768,
    CLASSNAME: 'inform-slider--flex',
  },
  NAVBAR: {
    ELEMENT: $('.navbar-slider'),
    SETTINGS: {
      variableWidth: true,
      dots: true,
      speed: 500,
      dotsClass: "baner-slider__dots",
    },
    BREAKPOINT: 768,
    CLASSNAME: 'navbar-slider--flex',
  },
  FIRST_SLIDER: {
    ELEMENT: $('.baner-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: false,
      dots: true,
      speed: 1500,
      dotsClass: "baner-slider__dots",
      slidesToShow: 1,
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
  PROD_SLIDER: {
    ELEMENT: $('.product-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: false,
      dots: false,
      speed: 1500,
      dotsClass: "baner-slider__dots",
      slidesToShow: 1,
      infinite: false,
      asNavFor: '.product-nav',
      swipe: false,
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
  NAV_SLIDER: {
    ELEMENT: $('.product-nav'),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 1500,
      dotsClass: "baner-slider__dots",
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: $('.product-nav-arrow-left'),
      nextArrow: $('.product-nav-arrow-right'),
      asNavFor: '.product-slider',
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
  BRAND_SLIDER: {
    ELEMENT: $('.brand-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: true,
      speed: 500,
      slidesToShow: 6,
      prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
      nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
      dotsClass: "baner-slider__dots",
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
  HOT_SLIDER: {
    ELEMENT: $('.hot-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: true,
      speed: 1500,
      slidesToShow: 3,
      arrows: false,
      prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
      nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
      dotsClass: "baner-slider__dots",
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
  LIDERS_SLIDER: {
    ELEMENT: $('.liders-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: true,
      speed: 1500,
      rows: 2,
      slidesToShow: 3,
      arrows: false,
      prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
      nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
      dotsClass: "baner-slider__dots",
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
  NOVELTY_SLIDER: {
    ELEMENT: $('.novelty-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: true,
      dots: false,
      speed: 1500,
      slidesToShow: 5,
      arrows: true,
      prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
      nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
      dotsClass: "baner-slider__dots",
    },
    // BREAKPOINT: OFF_SLIDER,
    CLASSNAME: '',
  },
}


function initialazeSlickSlider(slider) {
  const {
    BREAKPOINT,
    SETTINGS,
    ELEMENT
  } = slider;
  (document.documentElement.clientWidth <= BREAKPOINT || BREAKPOINT === undefined) && ELEMENT.slick(SETTINGS);
}

function toggleSlider(slider) {
  const {
    BREAKPOINT,
    ELEMENT,
    SETTINGS
  } = slider;
  document.documentElement.clientWidth > BREAKPOINT && ELEMENT.hasClass('slick-initialized') && ELEMENT.slick('unslick');
  document.documentElement.clientWidth <= BREAKPOINT && !ELEMENT.hasClass('slick-initialized') && ELEMENT.slick(SETTINGS);
}

function toggleExtraClass(slider) {
  const {
    BREAKPOINT,
    ELEMENT,
    CLASSNAME
  } = slider;
  document.documentElement.clientWidth > BREAKPOINT && !ELEMENT.hasClass(CLASSNAME) && ELEMENT.addClass(CLASSNAME);
  document.documentElement.clientWidth <= BREAKPOINT && ELEMENT.hasClass(CLASSNAME) && ELEMENT.removeClass(CLASSNAME);
}

initialazeSlickSlider(Sliders.INFORM);
initialazeSlickSlider(Sliders.NAVBAR);
initialazeSlickSlider(Sliders.FIRST_SLIDER);
initialazeSlickSlider(Sliders.BRAND_SLIDER);
initialazeSlickSlider(Sliders.HOT_SLIDER);
initialazeSlickSlider(Sliders.LIDERS_SLIDER);
initialazeSlickSlider(Sliders.NOVELTY_SLIDER);
initialazeSlickSlider(Sliders.PROD_SLIDER);
initialazeSlickSlider(Sliders.NAV_SLIDER);

window.addEventListener('resize', () => {
  toggleSlider(Sliders.INFORM);
  toggleExtraClass(Sliders.INFORM);
});


// -----------------  Табы  --------------------
$(".tab").on("click", function (e) {
  e.preventDefault();
  $(".tab-section").removeClass("tabs-content--active");
  $(".tab").removeClass("tab_active");

  $($(this).attr("href")).addClass("tabs-content--active");
  $(this).addClass("tab_active");
});

// -----------------  Селект  --------------------

// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll(".select");

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
  select.forEach((item) => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector(".select__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("is-active");
    });
  });
}

// ---------------- Счетчик ---------------------
$(function () {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".block-count__minus");
    var $quantityArrowPlus = $(".block-count__plus");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      var $quantityNum = $(this).siblings('.block-count__input');
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.block-count__input');
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

// -----------------  Гамбургер  --------------------
$(".hamburger").click(function (event) {
  $(".hamburger").toggleClass("hamburger__active"),
    $(".mobile__menu ").toggleClass("mobile__menu__active");
});

// ----------------- Аккордион --------------------
/**
 * Классы для аккордиона
 */
const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'accordion__active',
}

/**
 * acc - неизменная переменная для работы с аккордионом
 */
const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

/**
 * использует nextElementSibling для открытия или закрытия аккордиона
 */
function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}


function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

/**
 * Проверка на открытие аккордиона !nextElementSibling!
 */
function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

/**
 * Итерация, реализация переключения открытого аккордиона
 *
 */
for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// --------------

const accordionList = document.getElementsByClassName("accordion--multiple");
const classNameActive = "accordion--active";

for (const accordion of accordionList) {
  accordion.addEventListener("click", function () {
    this.classList.toggle(classNameActive);
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ------------- Ползунок --------------------


// -----------------  Лайк  --------------------
const likeButtonsAll = document.querySelectorAll('.like-btn');
const catalogBody = document.querySelector(".whish-favorire");

[...likeButtonsAll].map((button) => button.addEventListener('click', function () {
  this.classList.toggle('like-btn--active');
}));

if (catalogBody !== null) {
  const likeButtons = catalogBody.querySelectorAll('.like-btn');

  [...likeButtons].map((button) => button.classList.add('like-btn--active'));
}

// -------------------------------------------------

$(".polzunok-5").slider({
  min: 0,
  max: 500,
  values: [100, 300],
  range: true,
  animate: "fast",
  slide: function (event, ui) {
    $(".polzunok-input-5-left").val(ui.values[0]);
    $(".polzunok-input-5-right").val(ui.values[1]);
  }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function () {
  var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
    input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
    input_right = 0;
  }
  $(".polzunok-input-5-left").val(input_left);
  $(".polzunok-input-5-right").val(input_right);
  if (input_left != where_left) {
    $(".polzunok-5").slider("values", 0, input_left);
  }
  if (input_right != where_right) {
    $(".polzunok-5").slider("values", 1, input_right);
  }
});


$('body').on('click', '.password-control', function () {
  if ($('#password-input').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.password-control2', function () {
  if ($('#password-input2').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input2').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input2').attr('type', 'password');
  }
  return false;
});


! function () {
  var i, u, p, y, m, g, e = document.querySelectorAll(".yt-lazyload");
  0 < e.length && (u = document.createElement("div"), p = document.createElement("div"), y = document.createElement("div"), m = document.createElement("a"), g = document.createElement("iframe"), u.classList.add("yt-lazyload-wrap"), p.classList.add("yt-lazyload-content"), y.classList.add("yt-lazyload-playbtn"), m.classList.add("yt-lazyload-logo"), m.target = "_blank", m.rel = "noreferrer", g.setAttribute("allow", "accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"), g.setAttribute("allowfullscreen", ""), i = new IntersectionObserver(function (e) {
    e.forEach(function (e) {
      var t, a, o, n, r, l = e.target,
        d = e.target.dataset.id,
        c = e.target.dataset.thumb,
        s = e.target.dataset.logo;
      !0 === e.isIntersecting && (t = u.cloneNode(), l.append(t), a = p.cloneNode(), t.append(a), a.style.setProperty("--yt-lazyload-img", 'url("https://img.youtube.com/vi/' + d + c + '/maxresdefault.jpg")'), o = y.cloneNode(), a.append(o), "0" !== s && ((n = m.cloneNode()).href = "https://youtu.be/" + d, a.append(n)), o.addEventListener("click", function () {
        (r = g.cloneNode()).src = "https://www.youtube.com/embed/" + d + "?autoplay=1", a.append(r)
      }), i.unobserve(l))
    })
  }, {
    rootMargin: "200px 0px"
  }), e.forEach(function (e) {
    i.observe(e)
  }))
}();
