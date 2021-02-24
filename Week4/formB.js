function clickFunction(){
	var element = document.getElementById('myText');
	var div = document.getElementById('result');
	div.firstChild.nodeValue = element.value;
}

function loadFunction(){
	var element = document.getElementById('myButton');
	element.addEventListener('click', clickFunction);
}

document.addEventListener('DOMContentLoaded', loadFunction);


