var extend = (...params)=>{
    console.log(...params);
    console.log(Math.max(...params));
}

var passParams = [1,2,3,3,4];

extend(1,2,3,4);