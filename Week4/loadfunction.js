function  myLoadFunction() {
	var element = document.getElementById('test');
	element.firstChild.nodeValue = 'My Module';

	var element = document.getElementById('test1');
	element.firstChild.nodeValue = 'My paragraph';
}

document.addEventListener('DOMContentLoaded', myLoadFunction);