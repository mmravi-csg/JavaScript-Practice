const student = {
    fullName1: "ABC",
    marks: 95,
    printMarks: function(){
        console.log("marks", this.marks)
    },
}

console.log(student[this.fullName1])



//example1

const person = {
    fullName: "John",
    lastName: "Kenedy",
    age: 50,
    weight: 60
}

console.log(person.fullName)

person["height"]=5.5

console.log(person.height)

//example find out bounus of the employee
let employee=
{
    empname:"Scott",
    empid:1234,
    job:"Engineer",
    basicsal:50000,
    bonus: function()
    {
        return (this.basicsal*(10/100))
    }
};
console.log(employee.bonus());


//Arrays
let cars = ["Volvo", "BMW", "Maruti"];
//let cars = new Array("Volvo", "BMW", "Maruti")

console.log(cars)
console.log(cars[1])

//Example
let person1={
    Name:"John",
    age:30,
    job:"Engineer"
}
let person2={
    Name: "Scott",
    age: 40,
    job:"HR"
}

console.log(person1, person2)


// Array methods
// to conver array into string

//array.toString

let fruits = ["Mango", "Banana","Apple","Pinaple"]
console.log(fruits.toString()); //Mango, Banana, Apple, Pinaple

//join is used to join array with another array

console.log(fruits.join()); //Mango, Banana, Aplle, Pinaple

//each array is serrated by "*"
console.log(fruits.join("*")); //Mango*Banana*Apple*Pinaple

//.pop is used remove last array element from the array
fruits.pop()
console.log(fruits.pop);
console.log(fruits)

//.push is used to add element to array at last postion
fruits.push("Kiwi")
console.log(fruits) //[ 'Mango', 'Banana', 'Apple', 'Kiwi' ]

//.shift is used to remove the first element from the array
console.log(fruits.shift); //"Mango"

//unshift is used to add element to array at first position
fruits.unshift("watermelon") 
console.log(fruits) //[ 'watermelon', 'Mango', 'Banana', 'Apple', 'Kiwi' ]



//Class
class Student
{
    setdetails()
    {
        this.sid=101;  //this is indicates the class varibale.
        this.sname="John";
        this.grade = "A"

    }
    display()
    {
        console.log(this.sid, this.sname, this.grade);
    }
}

let stu = new Student();
stu.setdetails();
stu.display();

//example of class

class Name {
    constructor(var1) {
        this.var = var1;
    }
}


//exmaple

class OOPs {
    constructor(name) {
        this.name = name;
    }
 
    // Getter method
    get langName() {
        return this.name;
    }
 
    // Setter method
    set langName(x) {
        this.name = x;
    }
    hello(){
        console.log(`Hello ${this.name}`)
    }
}
 
let obj = new OOPs('JavaScript');
console.log(obj.name); 
 
obj.langName = 'Java';  //JavaScript
console.log(obj.name); //Java

//example

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";