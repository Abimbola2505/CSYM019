function  myClickFunction() {
	var element = document.getElementById('test');
	element.firstChild.nodeValue = 'My New Module';
}

document.addEventListener('click', myClickFunction);