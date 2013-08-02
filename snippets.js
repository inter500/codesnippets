// Preloads an image for later use. Not much functional, but prettier code.
function imgPreload(args_url) {
	$('<img />')[0].src = args_url;
}

// Flashes given icon in the middle of a page
function flashIcon(args_icon) {
	var img = $('<img />').attr({ 'id': 'flash', 'style': 'position:fixed; top:0; left:0; width:100%; height:100%; background-color:#fff; z-index: 10000; display: none;' }).appendTo(document.body);
	$('#flash').css('height', $(window).height()+'px');
	$('#flash').css('background-image', 'url('+args_icon+')');
	$('#flash').css('background-position', 'center');
	$('#flash').css('background-repeat', 'no-repeat');
	$('#flash').show();
	$('#flash').fadeOut(1000);
}