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


const excutePromiseAll = (...promises) => {
    console.time('promise all');
    const promisesArr = Promise.all(promises);
    promisesArr.then((results) => {
        console.log(results);
        //[ 'foo', 'foo2', 'foo3' ]
        console.timeEnd('promise all');
        // time 7s 
    }).catch((error) => {
        console.log(error);
        //['foo4']
        console.timeEnd('promise all');
        // time 1s 
    });
}

const excutePromiseRace = (...promises)=>{
    const promiseArr = Promise.race(promises);
    console.time('race')
    promiseArr.then((result)=>{
        console.log(result);
        console.timeEnd('race');
        // 1s, the first out 
    })
}


excutePromiseAll(promise1, promise2, promise3 , promise4);

excutePromiseRace(promise1,promise2,promise3);

// macrotask microtask 分别表示异步任务的两种分类。
// 在挂起任务时，JS 引擎会将所有任务按照类别分到两个队列中，
// 首先在 macrotask 的队列（也叫 task queue）中取出第一个任务，
// 执行完毕后取出 microtask 队列中的所有任务顺序执行；
// 之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。

// 那么遇到 WebAPI（例如：setTimeout, AJAX）这些函数时，这些函数会立即返回一个值，从而让主线程不会在此处阻塞。
// 而真正的异步操作会由浏览器执行，浏览器会在这些任务完成后，将事先定义的回调函数推入主线程任务队列中