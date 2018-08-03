$(function(){

	workBelt();
	workLoad();


});


function workBelt() {

	$('.thumb-unit').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});
}


$('.close').on('click', function(e){
		e.preventDefault();
		$('.home-popup').hide("slow");
});




function workLoad(){
	$.ajaxSetup({ cache : true });
	$('.thumb-unit').click(function(){
			var $this = $(this),
			newTitle = $this.find('strong').text(),
			newfolder = $this.data('folder'),
			spinner = '<div class="loader"">Loading ...</div>',
			newHTML = 'work/'+ newfolder +'.html' ;
			$('.project-load').html(spinner).load(newHTML);
			$('.project-title').text(newTitle);

	});

}


$('#smooth-scroll-menu  > a[href*="#"]:not([href="#"])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

$('#smooth-scroll-menu-2 > div > a[href*="#"]:not([href="#"])').click(function() {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
      return false;
    }
  }
});


let $btn = $('.btn-menu');

$btn.click(function () {

	$('body').toggleClass('show');

})