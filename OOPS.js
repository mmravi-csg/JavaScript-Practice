//creat a class

class Student{


    //create a method
    setDetails(){
        this.sid=101; //to make the varibable belong to class we use this 
        this.sname="John";
        this.grade="A";
    }

    display(){
        console.log(this.sid, this.sname, this.grade);
    }
}