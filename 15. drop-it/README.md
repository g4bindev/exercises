Este algoritmo filtra apartir do primeiro elemento correspondente com a função passada por parâmetro, de uma lista de números também passada por parâmetro.

Exemplo:

1. ([0, 1, 0, 1], (n) => return n === 1) retorna [1, 0, 1] porquê o primeiro elemento correspondente com a função é 1.
2. ([1, 2, 3, 4], (n) => return n > 5) retorna uma array vazia [] porquê nenhum elemento corresponde com a função.