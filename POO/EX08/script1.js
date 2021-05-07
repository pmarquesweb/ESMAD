//a. Create a countries array with the names of the countries Portugal, Spain and France
let countries = ['Portugal', 'Spain', 'France'];

//b. Print the first element in an alert box
alert(countries[0]);

//c. Print the last element in an alert box
alert(countries[countries.length - 1]);

//d. Add a new element: German
countries.push('German');

//e. Change the German element to Germany
countries.splice(countries.length - 1, 1, 'Germany');

//f. Print the following message in an alert box:
//The array has X countries!
//(where X indicates the number of current elements in the array)
alert(`The array has ${countries.length} countries!`)

//g. Create another array called countries2
//h. Equal (attribution operator) the created array to the countries array
let countries2 = countries;

//i. Add a new element (“Denmark”) to the countries2 array
countries2.push('Denmark');

//j. Print the countries array in an alert box. Analyze the results.
alert(countries);

//k. Iterate (using a for loop) over all elements of the array by displaying the country
//names on the console as follows:
//1 - Portugal
//2 - Spain
//…
for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1} - ${countries[i]}`);
}

//l. Solve the previous exercise using the for...of cycle
let count = 1;
for (country of countries) {
    console.log(`${count++} - ${country}`);
}