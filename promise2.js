function loadScript(url, title) {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.setAttribute('src', url);
        document.head.append(script);
        script.onload = () => resolve(title);
    });
}

loadScript('js/script2.js', 'script1')
    .then(d => {
        console.log('... step -- 1 --', d);
        return loadScript('js/script3.js', 'script2');
    })
    .then(d => {
        console.log('... step -- 2 --', d);
        return loadScript('js/script1.js', 'script3');
    })
    .then(d => {
        console.log('... step -- 3 --', d);
        one();
        two();
        three();
    });