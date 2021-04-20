let schedule = {};
alert(isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule) ); // false

function isEmpty(object) {
    propertySum = 0;
    for (let property in object) {
            return false;
        }
        return true;
    }

