function clickFunction(){
	var element = document.getElementById('myText');
	alert(element.value);
}

function loadFunction(){
	var element = document.getElementById('myButton');
	element.addEventListener('click', clickFunction);
}

document.addEventListener('DOMContentLoaded', loadFunction);