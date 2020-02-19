const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${(Date.now() - tick)/1000}sec`);

const codeBlocker = () => {
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) {
            i++;
        };
        console.log(`🐷 run billion times`);
    })
}

log(`🦁 Synchronous 1`);
codeBlocker();
log(`🦁 Synchronous 2`);