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

window.addEventListener('resize', () => {
  toggleSlider(Sliders.INFORM);
  toggleExtraClass(Sliders.INFORM);
});

// -----------------  Лайк  --------------------
$likeButton = $(".like-btn");
$likeButton.click(function () {
  $(this).toggleClass("like-btn--active");
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
$(".polzunok-5").slider({
  min: 0,
  max: 500,
  values: [70, 200],
  range: true,
  animate: "fast",
  slide : function(event, ui) {
      $(".polzunok-input-5-left").val(ui.values[ 0 ]);
      $(".polzunok-input-5-right").val(ui.values[ 1 ]);
  }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function() {
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
