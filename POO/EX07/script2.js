const student = {
    name: "John Doe",
    course: "POO",
    grade: 12
}

removeGrade(student);


function showProperties(object) {
    for (let property in object) {
        console.log(`${property}`);
    }
}

function removeGrade(object) {
    console.log('BEFORE')
    for (let property in object) {
        console.log(`${property}: ${object[property]}`);
    }
    
    delete object.grade;

    console.log('AFTER')
    for (let property in object) {
        console.log(`${property}: ${object[property]}`);
    }
}