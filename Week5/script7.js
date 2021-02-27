function  myLoadFunction() {

	var element = document.getElementById('circle');
	element.addEventListener('click', myClickFunction);
	
	

}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myClickFunction() {
	var element = document.getElementById('circle');
	var positionTop = element.offsetTop;
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft - 10 + 'px';
	console.log(element.style.left);
		
}

