class Bird {   
    constructor(name,canFly){

        // property are using this to define
        this._name = name;
        this._canFly = canFly;
    }

    fly(){
        this._canFly? console.log('can fly') : console.log('cannot fly' ); 
    };

    name(){
        console.log(this._name);
    };
    
}

class Chicken extends Bird{
    constructor(){
        super('Chicken',false);
    };

    fly(){
        super.fly();
    }

    name(){
        super.name();
    }
}

var chicken = new Chicken();
chicken.name();
chicken.fly();

// class in ES6 is a unique kind of function 

console.log(typeof Chicken);

let cellPhone = class{
    constructor(){}
 },
cellPhone2 = class randomPhone{ 
    constructor(){ this.battery = 0; }
};
console.log(cellPhone.name); //cellPhone
console.log(cellPhone2.name); //randomPhone



class Person {

}

console.log(typeof Person);