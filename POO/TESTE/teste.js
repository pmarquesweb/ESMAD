const myForm = document.querySelector('#form1');
const myTable = document.querySelector('#table1');

myForm.addEventListener('submit', function (event) {
    const orderedProduct = document.querySelector('#userProductSelector');
    const productIva = document.querySelector('input[name="iva"]:checked');
    let tempSubtotal = orderedProduct.value *productIva.value + orderedProduct.value;
    myTable.innerHTML +=`
    <tr>
        <td>${orderedProduct.selected}<td>
        <td><input type='number' value=1><td>
        <td>${orderedProduct.value}€<td>
        <td>${productIva.value*100}%<td>
        <td>${tempSubtotal}<td>
    </tr>
    `
    event.preventDefault();
    let productQuantity = document.querySelectorAll('input[type="number"]');
    for (quantity of productQuantity) {
        input.addEventListener('onfocusout', function(event){
            if (productQuantity != 1) {            
                this.innerHTML = `${tempSubtotal*productQuantity.value}`;
            }
        })
    }

    //myInput.value = myInput.defaultValue;  
    
    document.getElementById("myTextField").focus();
})