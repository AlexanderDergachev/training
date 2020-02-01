person = {
    name: 'tom',
    age: 12,
    gender: 'male'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log('Your prop:', prop);
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
