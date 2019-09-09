console.log(a);

var a = 10;

function cat(name) {
    console.log('my cat name is ' + name)
}

cat('Tian');


function calculate(num) {
    b = 10;
    console.log(b + num);
}

calculate(5);

console.log(b);

'use strict';

hoist = 'Hoisted';


console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';

console.log(hoist); // Output: ReferenceError: hoist is not defined
const hoist = 'The variable has been hoisted.';

a(10)

function a(num) {
    console.log(num);
}

b(10)

var b = function (num) {
    console.log(num);
}

var a = 10;
function a() {
    return 20;
}

console.log(a);

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

function testOrder(arg) {
    console.log(arg); // arg是形参，不会被重新定义
    console.log(a); // 因为函数声明比变量声明优先级高，所以这里a是函数
    var arg = 'hello'; // var arg;变量声明被忽略， arg = 'hello'被执行
    var a = 10; // var a;被忽视; a = 10被执行，a变成number
    function a() {
        console.log('fun');
    } // 被提升到作用域顶部
    console.log(a); // 输出10
    console.log(arg); // 输出hello
};
testOrder('hi');