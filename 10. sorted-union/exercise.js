function uniteUnique(arr, ...otherArrs) {
    // Concatenates all arrays into one
    const concatArr = arr.concat(...otherArrs)

    // Removes duplicate elements and return array in original order of elements
    return concatArr.filter((item, indexItem) => concatArr.indexOf(item) === indexItem)
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// expected output: [1, 3, 2, 5, 4]