class A{
    a=80;
    display(){
        console.log(this.a);
    }
}

class B extends A{
    b=90;
    show(){
        console.log(this.b);
    }
}
obj= new B();
obj.display();
obj.show();
