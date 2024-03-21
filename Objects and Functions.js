// let input='name'

// let alien={
//     name:'Bhavani',
//     tech:'JS',
//     'work exp': 4,
//     laptop:{
//         cpu:'i7',
//         ram:4,
//         brand:'dell'
//     }
// }
// console.log(alien)
// console.log(alien.name);
// console.log(alien.tech);
// console.log(alien['work exp']);
// console.log(alien[input]);
// console.log(alien.laptop.brand);
// console.log(alien.laptop.brand.length);
// console.log(alien.laptop.brand?.length);
// // delete alien.tech;
// // console.log(alien);




//////----for loop in objects----////
// let alien={
//     name:'Bhavani',
//     tech:'JS',
//     'work exp': 4,
//     laptop:{
//         cpu:'i7',
//         ram:4,
//         brand:'dell'
//     }
// }
// for(let key in alien)
// {
//     console.log(key,alien[key]);
//     // for(let key1 in alien[key]==laptop)
//     // {
//     //     console.log(key1,laptop[key1]);
//     // }
// }


//--------------------------------------------------------------------------//

// function greet()
// {
//     console.log("hello world");
// }
// greet();
// console.log(1);
// greet();

////----function value return and pass-----////
// function greet(user)
// {
//    return  `hello ${user}`;
// }
// let user='Bhavani'
// let str=greet(user);
// console.log(str);


//----expressions in function----//
let add=function(num1,num2)
{
    return num1+num2;
}

console.log(add(5,6))
let sum=add(5,5)
console.log(sum)
