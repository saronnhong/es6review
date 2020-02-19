const startTime = new Date();

function getTime(){
    const endTime = new Date();
    const timeDiff = (endTime.getTime() - startTime.getTime())/1000;
    console.log(`This is a 5s timer that takes ${timeDiff}s to run.`);
}

setTimeout(getTime, 5000);
