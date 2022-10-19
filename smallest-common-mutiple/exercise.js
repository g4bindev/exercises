function smallestCommons(arr) {
    // Organiza a array do menor elemento para o maior
    const [min, max] = arr.sort((a, b) => a - b)

    // Cria a lista que vai ser usada para a multiplicação dos números primos desta função
    const primeFactors = {}

    for(let i = min; i <= max; i++) {
        // Valor atual do fator
        const currentFactor = getPrimeFactors(i)

        for(let prime in currentFactor) {
            // Se não houver uma propriedade de currentFactor[prime] em primeFactors[prime] ou
            // Se o valor de currentFactors[prime] for maior que o valor de primeFactors[prime]
            // então primeFactors[prime] é igual ao valor de currentFactor[prime]
            if(!primeFactors[prime] || currentFactor[prime] > primeFactors[prime]) {
                primeFactors[prime] = currentFactor[prime]
            }
        }
    }

    let multiple = 1
    
    // Cria um loop que percorre por todas as propriedades de primeFactors e eleva elas ao próprio valor
    // prime = número primo utilizado na divisão; primeFactors[prime] = número de vezes que o Nº primo foi utilizado
    for(let prime in primeFactors) {
        multiple *= prime ** primeFactors[prime]
    }

    return multiple
}

// Checa e armazena em um objeto quantas vezes o número primo aparece
function getPrimeFactors(num) {
    const factors = {}

    for(let i = 2; i <= num; i++) {
        while((num % i) === 0) {
            factors[i] = (factors[i]) ? factors[i] + 1 : 1
            num /= i
        }
    }
    return factors
}

console.log(smallestCommons([10, 2]))
// output: 2520