export const clearAllIntervals = () => {
    const lastID = setInterval(() => {}, 9999); // Get a reference to the last
    console.log('###### lastIS', lastID);
    for (let i = 1; i <= lastID; i++) {
        console.log('clear interval: ' + i);
        window.clearInterval(i);
    }
};
