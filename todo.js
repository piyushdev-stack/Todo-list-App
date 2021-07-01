// Targetting the equired elements
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let list = document.querySelector("#list");
let delete1 = document.querySelector("#delete1");
let update = document.querySelector('#update')

// form event listener
let currentInput = '';
input.addEventListener('input', (e) => {
    currentInput = e.target.value;
})
// creating and appending new textnode
function newListelement(){
    let newListItem = document.createElement('li');
    let textNode = document.createTextNode(currentInput);
    newListItem.appendChild(textNode);
    return newListItem;
}
// appeding new list item to the main list
function addlist() {
    if (currentInput !== null && currentInput !== undefined && currentInput !== '') {
        newListItem = newListelement();
        list.appendChild(newListItem);
        input.value = '';
        currentInput = '';
    } else {
        alert('Please enter your task')
    }
};
// event listeners
submit.addEventListener("click", addlist);
delete1.addEventListener('click', () => {
    list.removeChild(list.lastElementChild)
})

update.addEventListener('click', () => {
    list.replaceChild(newListelement(), list.lastElementChild)
})
