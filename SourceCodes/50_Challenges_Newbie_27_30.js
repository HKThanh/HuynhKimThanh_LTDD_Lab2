// 27. Create a function that will receive an array of numbers as argument and will
// return a new array with distinct elements
function distinctArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(distinctArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]));
// 28. Calculate the sum of first 100 prime numbers and return them in an array
let isPrime = (numbers) => {
    if (numbers < 2) return true;
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0)
            return false;
    }

    return true;
}

let first100PrimeNumbers = () => {
    let i = 0;
    let array = [];
    while (i <= 100) {
        if (isPrime(i))
            array.push(i);
        i++;
    }
    return array;
}
let result = first100PrimeNumbers();
console.log(result);
let sum = first100PrimeNumbers().reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Sum of first 100 prime numbers: ${sum}`);
// 29. Print the distance between the first 100 prime numbers
// 30. Create a function that will add two positive numbers of indefinite size. The
// numbers
// are received as strings and the result should be also provided as string.