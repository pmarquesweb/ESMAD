const selectForm = document.querySelector('select');
const addButton = document.querySelector('#addBo');
const showButton = document.querySelector('#showBo');
const removeButton = document.querySelector('#rmvBo');

addButton.addEventListener('click', function(){
    const newColor = prompt("Nova cor:");
    selectForm.innerHTML += `
    <option value='${newColor}'>${newColor}</option>
    `
})

showButton.addEventListener('click', function(event){
    alert(selectForm.value);
    event.preventDefault();
})

removeButton.addEventListener('click', function(){
    selectForm.remove(selectForm.selectedIndex);
})