
  $('.baner-slider').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    speed: 1500,
    dotsClass: "delivery-slider__dots",
    prevArrow: '<div class="delivery-slider-left delivery-slider__button"><img src="img/chevron-left.svg" alt="Слайд"></div>',
    nextArrow: '<div class="delivery-slider-right delivery-slider__button"><img src="img/chevron-right.svg" alt="Слайд"></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    ]
  });

  var $status = $('.count');
  var $slickElement = $('.main-slider2');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
  });

  $('.product-item__favorite').click(function () {
    $(this).toggleClass('product-item__favorite-active')
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion__active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  };

  $(document).ready(function() {
    $(".open-image").fancybox();
  });

  $('.tab').on('click', function(e){
    e.preventDefault();
    $('.tab-section').removeClass('tabs-content--active');
    $('.tab').removeClass('tab_active');

    $($(this).attr('href')).addClass('tabs-content--active');
    $(this).addClass('tab_active');
  });


  // переменная не переназначается, поэтому используем const
  // используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
  const select = document.querySelectorAll('.select');

  // если массив не пустой, пробегаемся в цикле по каждой найденой сущности
  if (select.length) {
    select.forEach(item => {
      // достаем из текущей сущности .select__current
      const selectCurrent = item.querySelector('.select__current');

      item.addEventListener('click', event => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        // Проверяем является ли это choosen и не выбрано ли его значение уже
        if (el === 'choosen' && selectCurrent.innerText !== text) {
          selectCurrent.innerText = text;
        }

        item.classList.toggle('is-active');
      });
    });
  }

  $('.block-count__plus').click(function () {
    var max_qty = Number($(this).parent().find('.block-count__input').attr('max'));
    var qty = Number($(this).parent().find('.block-count__input').val());
    if (qty > max_qty) {
      qty = max_qty;
    } else if (qty == max_qty) {
      qty = max_qty;
    } else {
      qty += 1;
    }
    $(this).parent().find('.block-count__input').val(qty);
  });

  $('.block-count__minus').click(function () {
    if ($(this).parent().find('.block-count__input').val() > 1) {
      var plus = Number($(this).parent().find('.block-count__input').val()) - 1;
      $(this).parent().find('.block-count__input').val(plus);
    }
  });

  $(".hamburger").click(function(event) {
    $(".hamburger").toggleClass('hamburger__active'),
    $(".mobile__menu ").toggleClass('mobile__menu__active');
  });

