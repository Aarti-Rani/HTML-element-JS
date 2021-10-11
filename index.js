// Import stylesheets
import './style.css';

// Write Javascript code!
console.clear();
var list = document.getElementById("to-do");
var btnAdd = document.getElementById("add-item");
btnAdd.addEventListener("click", function () {
	var newListElement=document.createElement('li');
	var textNode=document.createTextNode('List Item'+(list.childElementCount+1));
	newListElement.appendChild(textNode)
	newListElement.id=("item"+(list.childElementCount+1))
	list.appendChild(newListElement)
	console.log(list.childElementCount);
		console.log(newListElement);
});
