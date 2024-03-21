////////if-else
// let num1=3,num2=4;
// // let result=num1>num2;
// if(num1>num2)
//     console.log("num1 is greater than num2");
// else
//     console.log("num2 is greater than num1");
// console.log("-----EOC-----");


// ////////if-else-elif
// let num1=3,num2=4,num3=5;
// // let result=num1>num2;
// if(num1>num2 && num1>num3)
//     console.log("num1 is the greatest");
// else if(num2>num3)
//     console.log("num2 is the greatest");
// else
//     console.log("num3 is the greatest");
// console.log("-----EOC-----");

//////odd or even using if-else and ternary operator ?:
// let num=9
// let result
// // if(num%2==0)
// //     console.log("num is even");
// // else
// //     console.log("num is odd");
// result=(num%2==0)?"even":"odd"
// console.log(result)

////////switch statement
// let day="Holiday"
// switch(day){
//     case 'Monday':
//         console.log("7AM");
//         break;
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("4AM");
//         break;
//     case 'Friday':
//         console.log("9AM");
//         break;
//     case 'Satday':
//         console.log("8AM");
//         break;
//     case 'Sunday':
//         console.log("8AM");
//         break;
//     default:
//         console.log("Chillaxxxx")
// }

////////template literal
// let x=4,y=5,result;
// result=x+y;
// // console.log("The addition of "+x+ " and " +y+ " is " +(x+y))
// // console.log("The addition of "+x+ " and " +y+ " is " +(result=x+y))
// // console.log("The addition of "+x+ " and " +y+ " is " +result)
// console.log(`The addition of ${x} and ${y} is ${result}`)

// console.log(`Hi
// This is Bhavani`)   //---------for new line to print as is without \n


////////----while loop----////////
// let i=1;
// while(i<=5)
//     {
//         console.log("hi");
//         i++;
//     }
// console.log(i);

// let i=5;
// while(i>0)
//     {
//         console.log("hi",i);
//         i--;
//     }

////////----DO-while loop----////////
// let i=10;
// do
//     {
//         console.log("hi",i);
//         i++;
//     }
// while(i<=5)


////////----for and nested loop----////////
// for(let i=1;i<=5;i++)
//     {
//         console.log("hi",i);
//         for(let j=1;j<=5;j++)
//             console.log("hello",j);
//     }


////////----for/while loop----////////
// let i=69437
// while(i>0)
//     {
//         console.log(i%10);
//         i=parseInt(i/10);
//     }