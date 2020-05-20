class Person {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age

        this.data = `Me llamo ${this.name} ${this.surname} y tengo ${this.age} años`
    }

    saludar() {
        return `Hola, me llamo ${this.name} y tengo ${this.age} años`
    }
}

const juan = new Person('Juan', 'Bolas', 35)
const martha = new Person('Martha', 'Bolas', 25)

console.log(juan)
console.log(juan.saludar())
console.log(martha.saludar())
