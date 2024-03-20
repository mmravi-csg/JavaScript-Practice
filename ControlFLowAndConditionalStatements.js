
//if condition - It will give the result when condition become True
//else condition - if all previous conditions were false then else condition will executes

//example 1:
let age = prompt("enter the age")
if(age>=18){
    console.log("The person is eleigible for voting")
} else{
    console.log("theperson is not eleigible for voting")
}

//example 2: even or odd
let num1 = 10;
if(num1%2==0){
    console.log(num1, "is even number")
} else{
    console.log("the ",num1, "is odd number")
}

//example 3 - Check number is multiple of 5

let num = prompt("enter the number");
if(num%5==0){
    console.log(num, "is multiple of 5")
} else{
    console.log(num, "is not multiple of 5")
}

// eample 4 - Print the students grade on basis of there marks

let marks = prompt("enter the the student marks")
if(marks>=90){
    console.log("A")
} else if(marks>=70 && marks<=89){
    console.log("B")
} else if(marks>=60 && marks<=69){
    console.log("C")
} else if(marks>=50 && marks<=59){
    console.log("D")
} else{
    console.log("F")
}


//Loops - for loop and while loop

//example 1

let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum+i;
}
console.log("sum is", sum)

//example 2
let str1 = "ApnaCollege"
for(let i of str1){
    console.log("i=",i)
}

// example - lets find out length of str

let count=0;
let str = "CreativeSynergiesGroup"
for(let i of str){
    console.log("i=", i);
    count++;
}
console.log("the count is", count)

//example
let student = {
    nameOfStudent: "XYZ",
    age: 20,
    cgpa: 8.4,
    isPass: true,
};

for (let key of student){
    console.log("key=", key, "value=",student[key]);
}


//example - print all ven number between 0 to 100
for(let num=0; num<=100; num++){
    if(num%2==0){
        console.log(num)
    }
}