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
