// Map
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

// Filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

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

const result = words.filter1((word) => word.length > 6);
console.log(result)