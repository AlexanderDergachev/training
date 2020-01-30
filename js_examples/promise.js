// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('prepearing...');
//         const data = {
//             server: 'node',
//             port: 8080,
//             status: 200
//         };
//         resolve(data);
//     }, 2000)
// })

// p.then(data => {
//         console.log(data);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 resolve(data);
//             }, 2000);
//         })
//     })
//     .then(data => {
//         console.log(`modified data\n`, data);
//     })
//     .catch(err => console.error('Error', err))
//     .finally(() => console.log('finally'))

////

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

const sleep2000 = sleep(2000).then(() => console.log('after 2 seconds'));
const sleep3000 = sleep(3000).then(() => console.log('after 3 seconds'));

Promise.all([sleep2000, sleep3000]).then(() => {
    console.log('All promises');
})

Promise.race([sleep2000, sleep3000]).then(() => {
    console.log('Race promises');
})