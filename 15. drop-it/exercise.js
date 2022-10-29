function dropElements(arr, func) {
    // Setup
    const filteredArr = []

    // Validação dos elementos, 
    for(let num in arr) {
        if(func(arr[num])) {
            while(num < arr.length) {
                filteredArr.push(arr[num])
                num++
            }
            return filteredArr
        }
    }

    return []
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3}))
// output: [3, 4]