function destroyer(arr, ...removeElem) {
    // Filters all arr elements not in removeElem and returns them
    return arr.filter(iten => !removeElem.includes(iten))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// expected output: [1, 1]