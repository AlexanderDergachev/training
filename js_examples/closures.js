//closures


//

// const fib = [1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//     setTimeout(() => {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1000);
// }

// for (let i = 0; i < fib.length; i++) {
//     setTimeout(() => {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1000);
// }

// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(`fib[${j}] = ${fib[j]}`);
//         }, 1000);
//     })(i)
// }

//

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const myNetlifyUrl = urlGenerator('netlify.com');
const comUrl = urlGenerator('com');

const trello = myNetlifyUrl('dergachev456-trello');
console.log(trello);

const shopno = myNetlifyUrl('dergachev456-shopno');
console.log(shopno);

const google = comUrl('google');
console.log(google);
