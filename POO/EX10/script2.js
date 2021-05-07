class Dice {
    #faceValue = 0;             //valor de cada face
    #quantity = 0;               //número de faces

    constructor() {
        this.#quantity = 6;
    }

    get faceValue() {
        return this.#faceValue;
    }

    set faceValue(value) {
        this.#faceValue = value;
    }

    getQuantityFaces(){
        return this.#quantity;
    }

    roll() {
        this.faceValue = Math.floor(Math.random() * 6) + 1;
    }
}

setInterval(run, 1000);

function run() {
    const table = document.querySelector('table');
    table.innerHTML = `
        <tr>
            <td>FACE</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    `

    const myFreqTable = [0,0,0,0,0,0];

    const myDice = new Dice();
    for (let i = 0; i < 100; i++) {
        myDice.roll();
        myFreqTable[myDice.faceValue - 1] += 1;
    }

    const dataRow = document.getElementById('myTR');

    let result = '';
    for (let i = 0; i < myDice.getQuantityFaces(); i++) {
        result += `<td>${myFreqTable[i]}</td>`;

    }
    table.innerHTML += `
        <tr>
            <td>FREQUÊNCIA</td>
            ${result}
        </tr>
    `
}