$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
		$('header').addClass('colour');
	}
	else{
		$('header').removeClass("sticky");
	}
});

$('.single-item-rtl').slick({
	rtl: false,
	dots: true,
	infinite: true,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ],
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    draggable: true,
    easing: 'linear',
});

$(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});

$('.slider-nav').slick({
  pauseOnHover: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed:5000,
  focusOnSelect: true,
  dots: true,
  appendDots: $('.slider-dots-box'),
  dotsClass: 'slider-dots',
});

// On before slide change
$('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slider-dots-box button').html('');
}).trigger('beforeChange');

// On before slide change
$('.slider-nav').on('afterChange', function(event, slick, currentSlide){
  $('.slider-dots-box button').html('');
   $('.slider-dots-box .slick-active button')
     .html(`<svg class="progress-svg" width="40" height="40">
    <g transform="translate(20,20)">
      <circle class="circle-go" r="19" cx="0" cy="0"></circle>
      <text class="circle-tx" x="0" y="2" alignment-baseline="middle" stroke-width="0" text-anchor="middle">${(currentSlide || 0) + 1}</text>
    </g>
    </svg>`);
}).trigger('afterChange');



var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: false,

  // Navigation arrows
  navigation: false,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});