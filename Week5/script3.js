function  myLoadFunction() {

	var element = document.getElementById('circle');
	element.addEventListener('click', myClickFunction);
	element.style.opacity = 0.5;
	
	var circleOpacity = element.style.opacity;
	console.log(circleOpacity);
	

}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myClickFunction() {
	var element = document.getElementById('circle');
	element.style.opacity = 1.0;
	element.style.backgroundColor = 'blue';

	
	
}