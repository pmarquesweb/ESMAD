const form = document.querySelector('form');
form.addEventListener('submit', function (event) {

    const costumerName = document.querySelector('#costumerNameInput');
    const costumerProduct = document.querySelector('#costumerProductSelector');
    const productQuantity = document.querySelector('#productQuantityInput');
    
    const myTable = document.querySelector('table');

    if(!existProduct(costumerName.value)) {
        myTable.innerHTML += `
            <tr>
                <td>${costumerName.value}</td>
                <td>${costumerProduct.value}</td>
                <td>${productQuantity.value}</td>
                <td>
                    <button class='plus'>+</button>
                    <button class='minus'>-</button>
                </td>
            </tr>
        `
    }
    else {
        updateProduct(costumerName.value, productQuantity.value);
    }
    event.preventDefault();
    
    //botão adicionar
    const addButtons = document.querySelectorAll('.plus');
    for (const addButton of addButtons) {
        addButton.addEventListener('click', function () {
            this.parentNode.parentNode.cells[2].innerHTML = +this.parentNode.parentNode.cells[2].innerHTML + 1
        })
    }

    //botão subtrair



})


/**botão “CONTAR GERAL” - ao ser premido deve exibir uma caixa de alerta com a
mensagem: “A lista de compras tem X produtos.” (onde X é o nº de produtos a comprar);

botão “CONTAR POR CATEGORIA” - ao ser premido deve exibir um prompt
onde é pedida uma categoria. Ao confirmar deve ser exibida uma caixa de alerta com a mensagem:
“A lista de compras tem X produtos da categoria Y a comprar.”
(onde X é o nº de produtos a comprar e Y é a categoria definida) (15%).


botão “LIMPAR LISTA” - ao ser premido deve limpar a lista de compras com
confirmação (todas as linha da tabela com a exceção do cabeçalho) (10%).
*/

function existProduct(product) {
    let result = false;

    const trs = document.querySelectorAll('tr');
    for (const tr of trs) {
        if (tr.cells[0].innerHTML == product) {
            result = true;
            break;
        }
    }
    return result;
}

function updateProduct(product, addNumber) {
    const trs = document.querySelectorAll('tr');
    for (const tr of trs) {
        if (tr.cells[0].innerHTML == product) {
            tr.cells[2].innerHTML = +tr.cells[2].innerHTML + +addNumber;
            break;
        }
    }
}