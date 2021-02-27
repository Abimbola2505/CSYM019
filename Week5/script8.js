function  myLoadFunction() {
	document.addEventListener('keydown', myKeyDown);
	
}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myKeyDown() {
	var element = document.getElementById('circle');
	var positionTop = element.offsetTop;
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft - 10 + 'px';
	console.log(element.style.left);
		
}