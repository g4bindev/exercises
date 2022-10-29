function steamrollArray(arr) {
    // Setup
    const elementsList = []

    // Checa se dentro de cada elemento possui ou não matrizes
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            elementsList.push(...steamrollArray(arr[i])) // Recursividade em elementos com matrizes
        } else {
            elementsList.push(arr[i])
        }
    }

    return elementsList
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
// output: [1, 2, 3, 4]