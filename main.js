function MyPromise(funExecut) {

    funExecut.resolve = function(val) {
        return val;
    }

    console.log('---- r1', funExecut());
    
    this.finally = function() {}
    this.then = function() {}
    this.catch = function() {}
}

var promise = new MyPromise(function(resolve, reject) {
    resolve(2);
});

fetch('gffg').then()

promise
  .then(f1 => console.log('-- 1', f1))
  .catch(f2 => console.log('-- 2', f2));

// console.log(new Promise(function(resolve, reject) {
//     try {
//         resolve();
//     } catch(e) {
//         reject(e);
//     }
// }))