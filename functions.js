function countVowel(str){
    let count =0 ;
    for (const char of str) {
        if(char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u") {
            count++;
        }
    }
    console.log(count)
}

let count1 = countVowel("narashimha");
console.log(count1)

//Arrow functions
function sum(a,b){
    sum = a+b;
    console.log(sum)
}

sum(3,4)

const arrowMul = (a,b) => {
    console.log(a*b)
}

arrowMul(3,4)


//example
function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30

  //example
  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


  //Eample
  array = [1,2,3,4,5];

  arr.forEach(function printVal(val) {
    console.log(val);
  })

