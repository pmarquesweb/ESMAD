const games = [
    { name: 'Rick Dangerous', year: 1989 },
    { name: 'Goblins', year: 1992 },
    { name: 'Golden Axe', year: 1989 }
]

//b. Show in the console information about the games
//Name: N / Year: A
games.forEach(game => console.log(`Name: ${game.name} / ${game.year}`));

//c. Display the number of existing games on the console
console.log(`There are ${games.length} games on the console`);

//d. Create a function called addGame that creates a new object (with user data from 2
//text boxes and an “ADD GAME” button) and insert them into the array

const myBtn = document.getElementById('btnAdd');
myBtn.addEventListener('click', addGame);

function addGame() {

    let newName = document.getElementById('newNameTxt').value;
    let newYear = document.getElementById('newYearTxt').value;     
    let newGameObject = {name: newName, year: +newYear};

    if (games.some(game => game.name == newName)) {
        alert('O jogo já existe!');
    }
    else {
        games.push(newGameObject);
        console.table(games);
    }
}