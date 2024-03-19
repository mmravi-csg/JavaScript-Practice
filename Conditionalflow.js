//if condition
if (hour < 18) {
    greeting = "Good day";
  }
 
  //////////////////////////////
    //else if statement
  var time 
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting)

  ////////////////////////////////
  //switch
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
  
///////////////////////////////
//for loop
let text;
for (let i = 0; i <=5; i++) {
     text = "The number is " + i ;
     console.log(text)
  }
  console.log(text)

///////////////////////////////////////////
  let i = 2;
  let cars="vovlvo"
let len = cars.length;
let text1 = "";
for (; i < len; i++) {
  text1 += cars[i] ;
  console.log(cars[i])
}

////////////////////////////
//for in loop
const person = {fname:"John", lname:"Doe", age:25};

let text2 = "";
for (let x in person) {
  text2 = person[x];
  console.log(text2)
}

//////////////////////////
//for in 
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt = numbers[x];
  console.log(txt)
}

////////////////
//for each
const numbers1 = [45, 4, 9, 16, 25];

let txt1 = "";
//numbers1.forEach(myFunction);
console.log(numbers1.forEach(myFunction))
function myFunction(value) {
  txt = value;
}

//////////////////
//looping over a string
let language = "JavaScript";

let text3 = "";
for (let x of language) {
text3 = x
console.log(text3)
}

//while
let i1
while (i1 < 10) {
  text += "The number is " + i1;
  i1++;
 }
 console.log(i1)

 ///////////////
 //do while loop
 let j =2
 do {
  text = "The number is " + j;
  j++;
}
while (j < 10)
console.log(j)

////////////////
//break
for (let z = 0; z < 10; z++) {
  if (z === 3) { break; }
  text4 = "The number is " + z
  console.log(text4)
}


  

