class employee{
    setDetails(){
        this.eid=10;  
        this.ename="Bhavana";

    }

    display(){
        console.log(this.eid);
        console.log(this.ename);
       

    }
}
obj= new employee();
  obj.setDetails();
    obj.display();