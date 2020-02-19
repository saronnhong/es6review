// console.log(`🍑 Synchronous 1`);

// setTimeout(_ => console.log(`🐩 Timeout 2`), 1000);

// Promise.resolve().then(_ => console.log(`🦄 Promise`));

// console.log(`🦁 Synchronous 4`);
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${(Date.now() - tick)/1000}sec`);

const getFruit = (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    setTimeout(_ => log(name), 1000);
    return fruits[name];
}

// getFruit("pineapple").then(res => console.log(`${res} is your fruit.`));

const makeSmoothie = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const c = await Promise.all([a,b])
    return c;
}
makeSmoothie().then(log);