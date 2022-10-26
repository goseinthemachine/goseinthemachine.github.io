// See how functions scope var
function makeCounter() {
    var i = 0;

    return function () {
        console.log(++i);
    }
}

var counter = makeCounter();
counter();
counter();

var counter2 = makeCounter();
counter2();
counter2();