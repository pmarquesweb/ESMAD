const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = sumSalaries(salaries);
alert(sum);

function sumSalaries () {
    let sum = 0;
    for (prop in salaries) {
        sum += +salaries[prop];
    }
    return sum;
}