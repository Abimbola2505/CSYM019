function  myLoadFunction() {
	var element = document.getElementById('circle');
	element.addEventListener('click', myClickFunction);
	
}

document.addEventListener('DOMContentLoaded', myLoadFunction);

function  myClickFunction() {
	alert('The button was clicked!!!')
	
	
	
}


