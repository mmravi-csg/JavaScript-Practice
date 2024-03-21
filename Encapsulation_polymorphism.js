/////////////////inheritance and polymorphism//////////////////////
class Shape
{
  draw(){
    return "i am generic shape"
  }
}

class square extends Shape{
  draw(){
    return "i am square"
  }
}

class circle extends Shape{
  draw(){
    return "i am circle"
  }
}

let s = new Shape()
console.log(s.draw()); //i am generic shape

s=new square()
console.log(s.draw()); //i am square

s=new circle()
console.log(s.draw());  //i am circle

/////////////////Encapsulation/////////////////////////

class student{
  constructor()
  {
    let name, marks;
  }
getName(){
return this.name;
}
setName(name){
this.name = name;
}

getMarks(){
return this.marks;
}
setMarks(marks){
this.marks=marks;
}

let stu = new student();
stu.setName("name");
stu.setMarks(90);
console.log(stu.getName().stu.getMarks()); //name, 90