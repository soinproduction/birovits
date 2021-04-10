$likeButton = $(".like-btn");
const accordionElement = document.getElementsByClassName("accordion");

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

    },
    BREAKPOINT: 500,
    CLASSNAME: '',
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
}


function initialazeSlickSlider(slider) {
  const {BREAKPOINT, SETTINGS, ELEMENT} = slider;
  (document.documentElement.clientWidth <= BREAKPOINT || BREAKPOINT === undefined) && ELEMENT.slick(SETTINGS);
}

function toggleSlider(slider) {
  const {BREAKPOINT, ELEMENT, SETTINGS} = slider;
  document.documentElement.clientWidth > BREAKPOINT && ELEMENT.hasClass('slick-initialized') && ELEMENT.slick('unslick');
  document.documentElement.clientWidth <= BREAKPOINT && !ELEMENT.hasClass('slick-initialized') && ELEMENT.slick(SETTINGS);
}

function toggleExtraClass(slider) {
  const {BREAKPOINT, ELEMENT, CLASSNAME} = slider;
  document.documentElement.clientWidth > BREAKPOINT && !ELEMENT.hasClass(CLASSNAME) && ELEMENT.addClass(CLASSNAME);
  document.documentElement.clientWidth <= BREAKPOINT && ELEMENT.hasClass(CLASSNAME) && ELEMENT.removeClass(CLASSNAME);
}

initialazeSlickSlider(Sliders.INFORM);
initialazeSlickSlider(Sliders.FIRST_SLIDER);

window.addEventListener('resize', () => {
  toggleSlider(Sliders.INFORM);
  toggleExtraClass(Sliders.INFORM);
});





$(".novelty-slider").slick({
  accessibility: true,
  arrows: true,
  dots: false,
  speed: 1500,
  slidesToShow: 5,
  arrows: true,
  prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
  nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
  dotsClass: "baner-slider__dots",
});

$(".liders-slider").slick({
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
});

$(".hot-slider").slick({
  accessibility: true,
  arrows: true,
  dots: true,
  speed: 1500,
  slidesToShow: 3,
  arrows: false,
  prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
  nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
  dotsClass: "baner-slider__dots",
});

$(".brand-slider").slick({
  accessibility: true,
  arrows: true,
  dots: true,
  speed: 500,
  slidesToShow: 6,
  prevArrow: '<div class="novelty-slider-left novelty-slider__button"><img src="img/slider-left.svg" alt="Слайд"></div>',
  nextArrow: '<div class="novelty-slider-right novelty-slider__button"><img src="img/slider-right.svg" alt="Слайд"></div>',
  dotsClass: "baner-slider__dots",
});


$likeButton.click(function () {
  $(this).toggleClass("like-btn--active");
});



for (var i = 0; i < accordionElement.length; i++) {
  accordionElement[i].addEventListener("click", function () {
    this.classList.toggle("accordion__active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(".tab").on("click", function (e) {
  e.preventDefault();
  $(".tab-section").removeClass("tabs-content--active");
  $(".tab").removeClass("tab_active");

  $($(this).attr("href")).addClass("tabs-content--active");
  $(this).addClass("tab_active");
});

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

$(".block-count__plus").click(function () {
  var max_qty = Number(
    $(this).parent().find(".block-count__input").attr("max")
  );
  var qty = Number($(this).parent().find(".block-count__input").val());
  if (qty > max_qty) {
    qty = max_qty;
  } else if (qty == max_qty) {
    qty = max_qty;
  } else {
    qty += 1;
  }
  $(this).parent().find(".block-count__input").val(qty);
});

$(".block-count__minus").click(function () {
  if ($(this).parent().find(".block-count__input").val() > 1) {
    var plus = Number($(this).parent().find(".block-count__input").val()) - 1;
    $(this).parent().find(".block-count__input").val(plus);
  }
});

$(".hamburger").click(function (event) {
  $(".hamburger").toggleClass("hamburger__active"),
    $(".mobile__menu ").toggleClass("mobile__menu__active");
});
