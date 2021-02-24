function updateParagraph() {
	var element = document.getElementById('test');
	element.firstChild.nodeValue = 'My New Desc';
}

function updateHeader(){
	var element = document.getElementById('test');
	element.firstChild.nodeValue = 'My New Module';

}
function  myLoadFunction() {
	var element = document.getElementById('test');
	element.addEventListener('click', updateHeader);

	var element = document.getElementById('test1');
	element.addEventListener('click', updateParagraph);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


