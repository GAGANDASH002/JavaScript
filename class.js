//declaring a class
class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName
        this.price=price
        this.discount=discount
        this.productCode=productCode
    }
    getitemName(){
        return this.itemName + "is a Product";
    }
}

//INHERITANCE:
class Furniture extends Product{
    constructor(itemName,price,discount,productCode){
        super(itemName,price,discount,productCode);//invokes superclass constructor
    }

    getitemName(){
        return this.itemName + "is a Furniture";
    }
}

let chair = new Furniture("chair",500,15,"C10")
let pencil = new Product("pencil",20,2,"P10")

pencil.getitemName();
chair.getitemName();

//using const expression to create class
/*const Product1 = class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName
        this.price=price
        this.discount=discount
        this.productCode=productCode
    }
    get getdiscountValue(){//getter function
        return this.discount;
    }
    set setdiscountValue(value){//setter function
        this.discount=value;
    }

};

let chair = new Product1("chair",500,15,"C10")
console.log(chair.getdiscountValue);//no need of () in call of getter function*/



