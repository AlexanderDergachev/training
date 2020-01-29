function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

// const person = new Person('leha', 'ivanov');
// console.log(person);

function myNew(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj
}

const person = myNew(Person, 'leha', 'ivanov');
console.log(person);

