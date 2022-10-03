function sumAll(arr) {
    // Sort the Array from the smallest to largest number
    arr.sort((a, b) => a - b)

    let sum = 0

    // Sum all the numbers between them
    for(let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        sum += i
    }

    return sum
}

console.log(sumAll([1, 4]))
// expected output: 10