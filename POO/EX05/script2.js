const myForm = document.querySelector('#form1');
const myTable = document.querySelector('#table1');

myForm.addEventListener('submit', function(event) {
    let newName = myForm.name.value;
    let newYear = myForm.year.value;
    let newGenre = myForm.genre.value;
    let newCover = myForm.cover.value;

    if (myForm.year.value < 1950 || myForm.year.value > new Date().getFullYear()) {
        alert('Erro: Ano inválido');
        event.preventDefault();
    }
    else {
        alert('Validação OK');

        myTable.innerHTML += `
        <tr>
            <td>${newName}</td>
            <td>${newYear}</td>
            <td>${newGenre}</td>
            <td>${newCover}</td>
            <td><input type='button' value='X'></td>
        `    
        event.preventDefault();
    }
    let inputs = document.querySelectorAll('input[type="button"]');
    for (input of inputs) {
        input.addEventListener('click', function(){
            this.parentNode.parentNode.remove();
        })
    }
})
