function  myLoadFunction() {
	var element = document.getElementById('test');
	element.addEventListener('click', myClickFunction);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myClickFunction() {
	var element = document.getElementById('test');
	element.firstChild.nodeValue = 'My New Module';

	var element = document.getElementById('test1');
	element.firstChild.nodeValue = 'My New Desc';
	
}