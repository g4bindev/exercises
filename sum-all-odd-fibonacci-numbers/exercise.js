function sumFibs(num) {
    const numArr = [1, 1]
    let firstNum = numArr[0]
    let nextNum = numArr[1]
    let res = firstNum + nextNum
    
    // Creates a fibonacci sequence less than the "num" argument
    for(let i = 0; i < num; i++) {
        numArr.push(res)

        firstNum = nextNum
        nextNum = res
        res = firstNum + nextNum

        if(res > num) break
    }

    // Returns the sum of all odd numbers
    return numArr.filter(item => item % 2 !== 0).reduce((a, b) => a + b)
}

console.log(sumFibs(1000))
// output: 1785