//primitive types (like strings and numbers) are passed by value


function changeValue(value) {
    value = 100;
    console.log("Inside function: ", value);
}

let number = 50;
changeValue(number);
console.log("Outside function: ", number);


// objects and arrays are passed by reference
//call by reference
function changeProperty(obj) {
    obj.property = 'new value';
    console.log("Inside function: ", obj);
}

let myObject = { property: 'old value' };
changeProperty(myObject);
console.log("Outside function: ", myObject);
