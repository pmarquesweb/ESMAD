//a. Create an empty user object
const objectOne = {};

//b. Add the name property with the value John
objectOne.name = 'John';

//c. Add the surname property with the value Smith
objectOne.surname = 'Smith';

//d. Change the value of the name property to Pete
objectOne.name = 'Pete';

//e. Remove the object's name property
delete objectOne.name;

alert(objectOne.name);
alert(objectOne.surname);
