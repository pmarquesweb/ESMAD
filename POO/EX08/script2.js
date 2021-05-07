//a. Create an empty array names
let names = [];

//b. Include a text box and an “ADD NAME” button on the web page. By pressing the
//button, you must add the contents of the text box to the array and print the contents
//of the array to the console
const myForm = document.getElementById('form1');

myForm.addEventListener('submit', function (event) {
    let newName = document.getElementById('addItem');
    names.push(newName.value);
    console.log(names);
    event.preventDefault();
})

//c. Add 5 names (“John”, “Peter”, “Mary”, “Ann”, “Michael”)
names.push("John");
names.push("Peter");
names.push("Mary");
names.push("Ann");
names.push("Michael");

//d. Extract the last name from the array and display it in an alert box
alert(names[names.length - 1]);

//e. Extract the first name of the array and display it in an alert box
alert(names[0]);

//f. Create a second array called names2 with the elements: “Charles”, “Paul”
let names2 = ['Charles', 'Paul'];

//g. Join both arrays in a new array called allNames and show it on the console
let allNames = names.concat(names2);
console.log(allNames);

//h. Solve the previous question using spread syntax
const allNamesSpread = [...names, ...names2];
console.log(allNamesSpread);
//i. Improve point (b) so it shouldn’t be possible to insert repeated names