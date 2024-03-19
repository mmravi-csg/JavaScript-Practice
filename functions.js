function add(p1,p2){
    return p1+p2
}
let result = add(2,3)
console.log(result)

function multiple(x1, x2){
    return x1*x2
}
let multi =multiple(10,5)
console.log(multi)

function mult(y1,y2){
    return y1/y2
}
let divide = mult(10,2)
console.log(divide)

//invocation
function calcAddition(number1, number2) { 
    return number1 + number2; 
}
console.log(calcAddition(6,9));

//Arrays
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(cars);

//array methods
//size of the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

//To get the third element of an array
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruit1.at(2);
console.log(fruit)

//get the third element using []
const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
let fru = fruit2[2];
console.log(fru)

//pop() - removes last element from an array
const fruit3 = ["Banana", "Orange", "Apple", "Mango"];
fruit3.pop();
console.log(fruit3)  // op - [ 'Banana', 'Orange', 'Apple' ]

//push() - adds new element to an array
const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
fruit4.push("Kiwi");
console.log(fruit4)  // op - [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//shift() - removes the first array element and shifts all other element to lowe index
const fruit5 = ["Banana", "Orange", "Apple", "Mango"];
fruit5.shift();
console.log(fruit5) //o/p - [ 'Orange', 'Apple', 'Mango' ]

//unshift() - method adds a new element to an array (at the beginning), and "unshifts" older elements
const fruit6 = ["Banana", "Orange", "Apple", "Mango"];
fruit6.unshift("Lemon");
console.log(fruit6) //o/p - [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

const fruit7 = ["Banana", "Orange", "Apple", "Mango"];
delete fruit7[0];
console.log(fruit7) - //op - [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]
