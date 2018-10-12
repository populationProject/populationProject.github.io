$(document).ready(function() {

	$('.expand-container').each(function() {
		var a = $(this).find('img');
		var p = $(this).find('p');

		p.hide();

		a.click(function() {
			p.slideToggle(500);
		});
	});
});