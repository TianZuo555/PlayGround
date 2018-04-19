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
