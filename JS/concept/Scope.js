
// global scope -- people saying it is bad to delcare variable 

// below is global scope
let something = 'a';

console.log(something);



var myFunction = function () {
    //local scope is 
    var name = "Tian"

    var otherFunction = function () {
        var name = 'Tian1'
        console.log(name)
    }

    otherFunction();
    console.log(name);
}

myFunction();


console.log(v);
var v = 123;