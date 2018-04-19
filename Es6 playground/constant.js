// const PI = 3.141593;

// ES5 syntax, 
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
// not able to edit in ES5,but no exception
PI = 123;

console.log(PI);


