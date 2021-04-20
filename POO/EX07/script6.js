let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

alert(`Before, width = ${menu.width}, height = ${menu.height}`);

multiplyNumeric(menu);
console.log(menu);
alert(`After, width = ${menu.width}, height = ${menu.height}`);

function multiplyNumeric(obj) {
    for (prop in obj) {
        if (typeof obj[prop] == 'number') {
            obj[prop] *= 2;
        }
    }
}