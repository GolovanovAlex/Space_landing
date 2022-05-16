$(function () {
  $('.slider__box').slick({
    arrows: true,
    prevArrow:
      '<img src="images/icon/arrow_prev.svg" alt="arrow" class="slider__arrow slider__arrow--prev" />',
    nextArrow:
      '<img src="images/icon/arrow_next.svg" alt="arrow" class="slider__arrow slider__arrow--next" />',

    responsive: [
      {
        breakpoint: 621,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $('.menu-burger').on('click', function () {
    $('.menu__list').toggleClass('active');
  });
});
