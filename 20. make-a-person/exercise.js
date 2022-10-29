const Person = function(firstAndLast) {
    // Setup
    firstAndLast = firstAndLast.split(" ")

    this.getFirstName = function() {
        return firstAndLast[0]
    }

    this.getLastName = function() {
        return firstAndLast[1]
    }

    this.getFullName = function() {
        return firstAndLast.join(" ")
    }

    this.setFirstName = function(first) {
        firstAndLast[0] = first
    }

    this.setLastName = function(last) {
        firstAndLast[1] = last
    }

    this.setFullName = function(full) {
        firstAndLast = [full.split(" ")[0], full.split(" ")[1]]
    }
}

const bob = new Person("Random People")

console.log("Nome completo:", bob.getFullName())
// first output: Random People

bob.setFirstName("Haskell")
console.log("\n" + bob.getFullName())
// second output: Haskell People