function func() {
  console.log(this);
}


var obj = {
  foo: function () {
    console.log(this);
  }
}

func.call(obj) // == func.call(undefined)

obj.foo();
var a = 2;
var b = 4;

function add() {
  return this.a + this.b;
}

var o = { a: 1, b: 3 };

console.log(add());

console.log(add.call(o)); // 16

function f() {
  return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // azerty

var aaa = 123;

var obj = { foo: foo };

var foo = () => {
  console.log(this);
}

foo.call(obj);

var o = {
  prop: 37,
  f: function () {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
