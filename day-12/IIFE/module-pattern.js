// Functions to the extreme

var moduleCounter = (function () {
    var index = 0;

    return {
        get: function () {
            return index;
        },
        set: function (val) {
            index = val;
        },
        increment: function () {
            return ++index;
        }
    }
})();

console.log(moduleCounter.get());
moduleCounter.set(3);
moduleCounter.increment();
console.log(moduleCounter.get());
moduleCounter.increment();
console.log(moduleCounter.get());
// var moduleCounter2 = new moduleCounter()
// console.log(moduleCounter2);