// Initialise FlexSlider for Carousels
// http://flexslider.woothemes.com/
// http://www.brendev.co/flexslider
$(window).load(function () {
  $(".flexslider").flexslider({
    animation: "fade",
    directionNav: true,
    slideshowSpeed: 5000,
    animationSpeed: 600,
    touch: true,
  });
});
