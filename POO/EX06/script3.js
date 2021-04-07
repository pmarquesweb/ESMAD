const myForm = document.querySelector('#form1');
let userSum = 0;

//adicionar outro perfil
const userProfile = document.querySelector('#profile');
userProfile.addEventListener('change', function () {
    if (userProfile.value == 'other') {
        const newProfile = prompt("Qual?");
        userProfile.innerHTML += `
        <option value='${newProfile}'>${newProfile}</option>
        `
    }
})

//botão adicionar regista valores e reinicia o formulário
myForm.addEventListener('submit', function (event) {

    const myTable = document.querySelector('#table1');
    const userName = document.querySelector('#name');
    const userProfile = document.querySelector('#profile');
    const userSession = document.querySelectorAll('input[name="checkSession"]:checked');
    const userCourse = document.querySelector('input[name="course"]:checked');

    if (userSession.length == 0) {
        alert('Mínimo de uma sessão');
    }
    else {
        let sessions = '';
        for (let session of userSession)
        {
            sessions += ` ${session.value}`;
        }
        
        myTable.innerHTML += `
        <tr>
            <td>${userName.value}</td>
            <td>${userCourse.value}</td>
            <td>${userProfile.value}</td>
            <td>${sessions}</td>
        </tr>
        `
        myForm.reset();
        userSum++;
    }
    event.preventDefault();

})

//botão contar alerta número de inscritos
const countButton = document.querySelector('input[type="button"]');
countButton.addEventListener('click', function () {
    alert(`${userSum} inscritos`);
})