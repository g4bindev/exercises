function diffArray(arr1, arr2) {
    return arr1
        // Merge arrays for easier search
        .concat(arr2)

        // If don't have item in arr1 or arr2 return item
        .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// expected output: [4]