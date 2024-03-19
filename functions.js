//1.Function demonstarting addition of two numbers with different syntax.

let addnumbers=(a,b)=>a+b;
console.log(addnumbers(2,5));

//2.Function to sum the elements in an array.

function addelements(marks)
{
var sum=0;
for(var i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}
console.log(sum);

}
let output3=addelements([10,20,30]);
console.log(output3);

//Function to find square root



const square = function (n) {
    return n * n;
};
const x = square(4); 
console.log(x);

//Array methods in JS

function methods()
{
    
let names = ["Bhavana", "Bhavani", "Nikitha", "Anjana"];
console.log(names.length);


let numArr1 = [10, 20, 30, 40, 50];
numArr1.push(60);
numArr1.push(70, 80, 90);
console.log(numArr1);


let strArr1 = ["Bhavana", "Bhavani", "Nikitha", "Anjana"];
strArr1.push("A", "B");
console.log(strArr1);


let numArr = [20, 30, 40, 50];
numArr.pop();
console.log(numArr);

let strArr = ["Bhavana", "Bhavani", "Nikitha"];
strArr.pop();
console.log(strArr);
}
let output = methods()
console.log(output);




