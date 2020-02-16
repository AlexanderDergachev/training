//object
person = {
    name: 'tom',
    age: 12,
    gender: 'male'
}

const op = new Proxy(person, {
    get(target, prop) {
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} field in target`);
        }
    },
    has(target, prop) {
        return ['age', 'genger'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleted', prop);
        delete target[prop];
        return true;
    }
})

// console.log(op.name);

// op.name = 'tomka';
// op.lastname = 'romka';

// console.log('name' in op);
// console.log('age' in op);


// delete op.age;
// console.log(op);

// console.log(op.age_name_gender);


// func

const sum = (a, b) => a + b;

const fp = new Proxy(sum, {
    apply(target, thisArg, args) {
        console.log('Calling sum');
        return target.apply(thisArg, args);
    }
})

// console.log(fp(1, 10));

//Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('construct');
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop ${prop}`);
                return t[prop]
            }
        })
    }
})

// const p = new PersonProxy('Alexander', 20);

// console.log(p.name);


class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name
    };

}

class Dog extends Animal {
    bark() {
        return `Dog ${this.name} is barking`
    }
}
// var dog = new Dog ('Aban');
// console.log(dog.getName () === 'Aban');
//  // true

// console.log(dog.bark () === 'Dog Aban is barking');
 // true