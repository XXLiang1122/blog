if (window.screen.width < 1024) {
	var scrollTop = 0;
	var html = document.documentElement;
	var body = document.getElementsByTagName('body')[0];
	var dialog = document.getElementById('dialog');
	var img = document.getElementById('img');
	document.getElementsByClassName('content')[0].addEventListener('click', function (e) {
		var e = e || window.event;
	    var target = e.target || e.srcElement;
	    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (target.nodeName.toLowerCase() === 'img') {
			var src = target.getAttribute('src');
			dialog.style.display = 'flex';
			img.setAttribute('src', src);
			body.classList.add('noScroll');
			html.classList.add('noScroll');
			body.scrollTop = scrollTop;
		}
	});
	dialog.addEventListener('click', function () {
		dialog.style.display = 'none';
		body.classList.remove('noScroll');
		html.classList.remove('noScroll');
	});
}