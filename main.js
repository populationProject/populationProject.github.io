var elemPos = [];
var elemPos2 = [];

$(document).ready(function() {

	$('.expand-container').each(function() {
		var a = $(this).find('img');
		var p = $(this).find('p');

		p.hide();

		a.click(function() {
			p.slideToggle(500);
		});
	});

	$('.line').each(function() {
		elemPos.push({num: $(this).offset().top, elem: $(this)});
	});

	$('.lineN').each(function() {
		elemPos2.push({num: $(this).offset().top, elem: $(this)});
	})

	console.log(elemPos);
	console.log(elemPos2);

	onScroll()
});


$(document).scroll(function() {
	onScroll()
});

function onScroll() {
	console.log('Scrolling');
	elemPos.forEach(function(e) {
		console.log('Element: ' + e);

		if(e.num < scrollBottom()) {
			e.elem.addClass('anim');
			console.log('animating at ' + e.num + ' elem: ' + e.elem);
		}
	});

	elemPos2.forEach(function(j) {
		console.log('Element: ' + j)

		if(j.num < scrollBottom()) {
			console.log("should be adding animR")
			j.elem.addClass('animR');
			console.log('animating at ' + j.num + ' elem: ' + j.elem)
		}
	})
}

function scrollBottom() {
	return $(window).scrollTop() + window.innerHeight;
}