 $( document ).ready(function() {
jQuery( ".header .leftmenu ul li ul" ).before( '<span class="accordion-toggle"></span>' );
$(document).on('click', '.header .leftmenu ul li span' ,function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
	 
     $(".nav-icon a").click(function(){
  $("body").toggleClass("activemenu");
});

  $(".closemenu").click(function(){
  $("body").removeClass("activemenu");
});

$(".header .leftmenu ul li a").click(function(){
  $("body").removeClass("activemenu");
});

  
new WOW().init();
 
})  
 
var sticky_navigation_offset_top =100 ;
var sticky_navigation = function(){
var scroll_top = $(window).scrollTop(); 
if (scroll_top > sticky_navigation_offset_top) { 
	$('body').addClass("fixnav");       
} else {
	$('body').removeClass("fixnav");
}}; 
sticky_navigation(); 
jQuery(window).scroll(function() { sticky_navigation(); });


$(document).ready(function(){
	jQuery("#carousel").owlCarousel({
	autoplay: false,
	lazyLoad: true,
	loop: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
   items: 1,   
	responsiveClass: true,
	autoHeight: true,
	nav: true,
	autoplayHoverPause:true,
	
  });
});