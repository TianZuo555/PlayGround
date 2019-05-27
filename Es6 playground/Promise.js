const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo2');
    }, 7000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo3');
    }, 3000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('foo4');
    }, 1000);
});

let promiseArray = [];

const excutePromiseAll = (...promises) => {
    console.time();
    const promisesArr = Promise.all(promises);
    promisesArr.then((results) => {
        console.log(results);
        //[ 'foo', 'foo2', 'foo3' ]
        console.timeEnd();
        // time 7s 
    }).catch((error) => {
        console.log(error);
        //['foo4']
        console.timeEnd();
        // time 1s 
    });
}

excutePromiseAll(promise1, promise2, promise3 , promise4);
