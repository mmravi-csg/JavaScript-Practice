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

