function steamrollArray(arr) {
    // Setup
    const elementsList = []

    // Percorre por toda array em busca de uma ou mais matrizes
    for(let num in arr) {
        if(!Array.isArray(arr[num])) {
            elementsList.push(arr[num])
        }
        
        // Checa se dentro desse elemento possui uma ou mais matrizes
        let elem = arr[num]
        for(let i = 0; i < elem.length; i++) {
            if(Array.isArray(elem[i])) {
                let flag = elem[i]

                while(Array.isArray(flag)) {
                    flag = flag[0]
                }

                elementsList.push(flag)
            } else {
                elementsList.push(elem[i])
            }
        }
    }

    return elementsList
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
// output: [1, 2, 3, 4]