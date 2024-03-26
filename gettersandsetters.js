class Objectoriented {
    constructor(name) {
        this.name = name;
    }
 
    
    get langName() {
        return this.name;
    }
 
    
    set langName(x) {
        this.name = x;
    }
    hello(){
        console.log(`Hello ${this.name}`)
    }
}
 
let obj = new Objectoriented('JavaScript');
console.log(Objectoriented.name); 
 
Objectoriented.langName = 'Java';
console.log(Objectoriented.name);