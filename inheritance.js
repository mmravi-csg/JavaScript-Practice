class A{
    a="Bhavana";
    display(){
        console.log(this.a);
    }
}

class B extends A{
    b="Datta";
    show(){
        console.log(this.b);
    }
}
obj= new B();
obj.display();
obj.show();