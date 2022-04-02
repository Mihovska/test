// function after5s(x) {
//     return new Promise(res => {
//         setTimeout(() => {
//             res(x)
//         }, 5000)
//     })
// }

// async function nult(input) {
//     const f = await after5s(3)
//     const g = await after5s(4)
//     return input = f * g
// }

// nult(2).then(value => {
//     console.log(value)
// })

// async function secondNult(input) {
//     const f = await after5s(3)
//     const g = await after5s(4)
//     return input * await f * await g
// }

// secondNult(2).then(value => {
//     console.log(value)
// })

const sample = Promise.resolve('Data')

(async () => {
    try {
        console.log(await sample)
    } catch {
        throw new Error('Error')
    } finally {
        console.log('Finale')
    }
})()