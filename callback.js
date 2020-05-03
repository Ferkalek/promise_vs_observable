showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
})


function showCircle(cx, cy, radius, callback) {
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
        callback(div);
      });
    }, 0);

    // setTimeout(callback(), 2000);
  }




// loadScript('js/script1.js', function() {
//     loadScript('js/script2.js', function() {
//         loadScript('js/script3.js', newFunc);
//     });
// });

// function loadScript(src, callback) {
//     var dinamicScript = document.createElement('script');

//     dinamicScript.setAttribute('src', src);

//     dinamicScript.onload = () => callback();

//     document.head.append(dinamicScript);
// }

// function newFunc() {
//     console.log('run newFunc!!!');
// }