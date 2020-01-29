//closures

const fib = [1, 2, 3, 5, 8, 13];

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

for (var i = 0; i < fib.length; i++) {
    (
        (function (j) {
            setTimeout(() => {
                console.log(`fib[${j}] = ${fib[j]}`);
            }, 1000);
        })(i)
    )
}