function  myLoadFunction() {

	var element = document.getElementById('circle');
	element.addEventListener('click', myClickFunction);
	

}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myClickFunction() {
	var element = document.getElementById('circle');
	element.style.backgroundColor = 'blue';
	
}


