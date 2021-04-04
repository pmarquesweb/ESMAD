//a
document.body.innerHTML = `
<table>
    <tr>
        <th>escola</th>
        <th>local</th>
    </tr>
    <tr>
        <td>ESMAD</td>
        <td>Vila do Conde</td>
    </tr>
</table>
`

//b. Adicione uma nova linha com o conteúdo: ISEP Porto
let newRow = document.createElement('tr')
let newEscolaElement = document.createElement('td');
let newLocalElement = document.createElement('td');

let newEscolaText = document.createTextNode('ISEP');
let newLocalText = document.createTextNode('Porto');

newEscolaElement.appendChild(newEscolaText);
newLocalElement.appendChild(newLocalText);
newRow.appendChild(newEscolaElement);
newRow.appendChild(newLocalElement);

let table = document.querySelector('table');
table.appendChild(newRow);

//d. Altere o local da ESMAD para o conteúdo: Vila do Conde/Póvoa de Varzim
let esmadLocal = document.querySelector('td:nth-of-type(2)');
esmadLocal.innerHTML += "/Póvoa de Varzim";

//e. Remova o cabeçalho da tabela
let tableHeader = document.querySelector('tr:nth-of-type(1)');
let tbody = document.querySelector('tbody');
tbody.removeChild(tableHeader);