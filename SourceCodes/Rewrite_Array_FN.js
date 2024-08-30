// map
let fn = (item) => {
    return item ** 2;
}

let arr = [2, 4, 40];
// console.log(arr.map(fn));
// Rewrite:
Array.prototype.mapFN = function (callBackFn) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callBackFn(this[i]));
    }

    return newArray;
}
// console.log(arr.mapFN(fn));

// filter
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
// Rewrite:
Array.prototype.filter1 = function (callBackFN) {
    let newArray = [];
    let length = this.length;
    for (let i = 0; i < length; i++) {
        if (callBackFN(this[i])) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

// const result = words.filter1((word) => word.length > 6);
// console.log(result)

// reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 2;
let reduceFN = (accumulator, currentValue) => {
    console.log('accumulator: ' + accumulator);
    console.log('currentValue: ' + currentValue);
    console.log('--------------------------')
    return accumulator + currentValue;
}
// const sumWithInitial = array1.reduce(reduceFN, initialValue);

// console.log(sumWithInitial);
// Expected output: 10
Array.prototype.myReduce = function (callbackFN, initialValue) {
    let accumulator = initialValue;
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        accumulator = this[0];
    }
    for (; i < this.length; i++) {
        accumulator = callbackFN(accumulator, this[i]);
    }
    return accumulator;
}
let resultWithOutInitialValue = array1.myReduce(reduceFN);
console.log("New reduce function result without initialValue: " + resultWithOutInitialValue);
let resultWithInitialValue = array1.myReduce(reduceFN, 3);
console.log("New reduce function result with initialValue: " + resultWithInitialValue)