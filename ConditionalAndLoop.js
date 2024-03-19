//do -while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//for-loop
for(let i=0;i<=10;i++)
{
    console.log(i);

}

//for-in
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}



let day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}

let num = 5;
if (num > 0) {
    console.log("Positive number");
}

let num1 = -5;
if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}

let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana");
        break;
    case "apple":
        console.log("Apple");
        break;
    default:
        console.log("Unknown fruit");
}