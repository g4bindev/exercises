function sumPrimes(num) {
    const primesList = []

    // Make a list of prime numbers if condition is True
    for(let i = 2; i <= num; i++) {
        if(primesList.every(prime => i % prime !== 0)) {
            primesList.push(i)
        }
    }

    // Add all the numbers in the list
    return primesList.reduce((num, nextNum) => num + nextNum)
}

console.log(sumPrimes(10))
// output: 17