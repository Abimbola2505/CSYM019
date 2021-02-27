function  myLoadFunction() {

	var element = document.getElementById('circle');
	element.addEventListener('click', myClickFunction);
	element.style.opacity = 1.0;
	

}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myClickFunction() {
	setInterval(intervalTimer,10);
		
}

function intervalTimer() {
	var element = document.getElementById('circle');
	var circleOpacity = parseFloat(element.style.opacity);
	element.style.opacity = circleOpacity - 0.01;
}