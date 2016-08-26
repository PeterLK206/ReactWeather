function getTempcallback(location, callback) {
    callback(undefined, 78);
    callback('City Not Found');
}

getTempcallback('Seattle', function(err, temp) {

    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }

});

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (location == 'Seattle') {
                resolve(79);
            } else {
                reject('City Not Found');
            }
        }, 3000);
    });
}

getTempPromise('Seattle').then(function(temp) {
    console.log('Promise Success', temp);
}, function(err) {
    console.log('Promise Error', err);
});

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
} else {
    reject('One or more variables is not a number.')
}
});
}

addPromise(5, 10).then(function(temp) {
    console.log('Promise Success', temp);
}, function(err) {
    console.log('Promise Error', err);
});

addPromise(5, 'd').then(function(temp) {
    console.log('Promise Success', temp);
}, function(err) {
    console.log('Promise Error', err);
});
