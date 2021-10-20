// Import stylesheets
console.clear();
var list = document.getElementById("to-do");
var btnAdd = document.getElementById("add-item");
var btnUpdate = document.getElementById("update-item");
var btnRemove = document.getElementById("remove-item");
var inputBox = document.getElementById("todo-input");
var currentInputValue = "";
inputBox.addEventListener("input", function (e) {
	currentInputValue = e.target.value;
});
inputBox.addEventListener("keyup", function (e) {
	if (e.keyCode === 13) {
		addListItem();
	}
});
function createNewNode() {
	var newListElement = document.createElement("li");
	var textNode = document.createTextNode(currentInputValue);
	//var textNode = document.createTextNode("List Item" + (list.childElementCount + 1)
	newListElement.appendChild(textNode);
	newListElement.id = "item" + (list.childElementCount + 1);
	return newListElement;
}
//var firstItem=document.getElementById('item1')
function addListItem() {
	if (
		currentInputValue !== undefined &&
		currentInputValue !== null &&
		currentInputValue !== ""
	) {
		var newListElement = createNewNode();
		//var firstItem = list.firstElementChild;
		//console.log(firstItem);
		//list.insertBefore(newListElement, firstItem);
		list.appendChild(newListElement);
		console.log(list.childElementCount);
		console.log(newListElement);
		inputBox.value = "";
		currentInputValue = "";
	} else {
		window.alert("Please enter a valid TODO");
	}
}
btnAdd.addEventListener("click", addListItem);
btnUpdate.addEventListener("click", function () {
	var firstElement = list.firstElementChild;
	var newListElement = createNewNode();
	list.replaceChild(newListElement, firstElement);
});
btnRemove.addEventListener("click", function () {
	var firstElement = list.firstElementChild;
	list.removeChild(firstElement);
});
