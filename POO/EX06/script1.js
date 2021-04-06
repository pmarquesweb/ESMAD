const myTable = document.querySelector('#table1');
const myForm = document.querySelector('#form1');
const editButton = document.querySelector('input[type=button]');

myForm.addEventListener('submit', function(event){
    let newSchool = myForm.name.value;
    let newLocal = myForm.local.value;

    myTable.innerHTML += `
    <tr>
        <td>${newSchool}</td>
        <td>${newLocal}</td>
    </tr>
    `
    event.preventDefault();
})

editButton.addEventListener('click', function(){
    //obter número de linha
    let userRow = +prompt('Linha:');

    //obter coluna
    let userColumn = prompt('Coluna:');

    let oldContent = document.querySelector('table').rows[userRow].cells[userColumn - 1].innerHTML;

    let newContent = prompt("Nova informação:", oldContent);

    document.querySelector('table').rows[userRow].cells[userColumn - 1].innerHTML = newContent;
})