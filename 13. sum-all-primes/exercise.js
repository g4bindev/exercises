function sumPrimes(num) {
    let primesList = 0

    // Function that checks whether the argument is prime or not
    const isPrime = (prime) => {
        // If the number is not prime, the loop return 0 to the function
        for(let i = 2; i < prime; i++) {
            if(prime % i === 0) {
                return 0
            }
        }
        if(prime > 1) primesList += prime // If it's prime add it to prime numbers list
    }

    for(let i = 2; i <= num; i++) {
        isPrime(i)
    }

    return primesList
}

console.log(sumPrimes(10))
// output: 17