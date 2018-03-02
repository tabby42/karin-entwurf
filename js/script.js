$(document).ready(function () {
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
	  // Optional parameters
	  //direction: 'vertical',
	  slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
	  loop: true,
	  grabCursor: true,
	  autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
	  // pagination: {
	  //   el: '.swiper-pagination',
	  //   clickable: true
	  // }
	});
});