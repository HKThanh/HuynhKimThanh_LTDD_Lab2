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
console.log(arr.mapFN(fn));