if (screen.width < 1193) {
  $(document).ready(function () {
    $('.captains-journal-slider').slick({
      infinite: true,
      responsive: [
    {
      breakpoint: 1193,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
    });
  });
}





