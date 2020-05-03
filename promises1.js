function showCircle(cx, cy, radius) {
    return new Promise((res, rej) => {
        let div = document.createElement('div');
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        div.className = 'circle';
        document.body.append(div);

        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                res(div);
              });
        }, 0);
    });
  }

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve({
//         status: 'GOOD',
//         result: [1, 55, 12]
//     }), 2000);
// });

// promise.then(val => console.log('---', val))

// https://jsonplaceholder.typicode.com/photos
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch( error => console.error('error:', error) );

let loadUsers = url => new Promise((resolve, reject) => {
    setTimeout(() => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        
        // request state change event
        xhr.onreadystatechange = function() {
        
          // request completed?
          if (xhr.readyState !== 4) return;
        
          if (xhr.status === 200) {
            // request successful - show response
            resolve(xhr.response);
          }
          else {
            // request error
            reject({
                errorTitle: 'HTTP error!!!',
                errorMessage: xhr.status + xhr.statusText
            });
          }
        };
        
        // start request
        xhr.send();
    }, 5000);
});

// console.log('>>>', new Promise((r1, r2) => r1()));

// loadUsers('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log('result from promise -->>', data))
//     .catch(err => console.log('Error...', err));


function delay(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('time = ' + time);
        }, time);
    });
}

delay(1000).then(d => console.log('Finished with result:', d, 'ms'))

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });