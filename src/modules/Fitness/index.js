import React, {useState} from 'react';

let intervals = [];
const clearIntervals = () => {
    intervals.forEach(clearInterval);
    intervals = [];
};

const Fitness = () => {
    const [trainingTime, setTrainingTime] = useState(30);
    const [restTime, setRestTime] = useState(10);
    const [repeat, setRepeat] = useState(2);

    const handleChangeTrainingTime = (event) => {
        setTrainingTime(parseInt(event.currentTarget.value));
    };
    const handleChangeRestTime = (event) => {
        setRestTime(parseInt(event.currentTarget.value));
    };
    const handleChangeRepeat = (event) => {
        setRepeat(parseInt(event.currentTarget.value));
    };

    const countDown = () => {
        clearIntervals();

        let counterInSeconds = trainingTime + restTime;
        console.log('Total: ' + counterInSeconds);
        
        const alertOneAt = (counterInSeconds - trainingTime);

        const intervalId = setInterval(() => {
            counterInSeconds--;
            console.log('current: ' + counterInSeconds);

            if (counterInSeconds === alertOneAt) {
                console.log('alert: training completed');
                window.alert.play();
            }

            if (counterInSeconds === 0) {
                clearIntervals(intervalId);
                console.log('alert: rest completed');
                window.alert.play();
            }
        }, 1000);

        intervals.push(intervalId);
        setRepeat(prevRepeat => (prevRepeat - 1));
    };

    const handleStartClick = () => {
        countDown();
    };
    
    return (
        <div className="container fitness">
            <div className="select-wrapper icon-circle-down">
                <label htmlFor="training-time">Training-Zeit auswählen</label>
                <select onChange={handleChangeTrainingTime} value={trainingTime}>
                    <option value={30}>30s (Training)</option>
                    <option value={40}>40s (Training)</option>
                    <option value={50}>50s (Training)</option>
                    <option value={60}>60s (Training)</option>
                </select>
            </div>
            <div className="select-wrapper icon-circle-down">
                <label htmlFor="rest-time">Pause-Zeit auswählen</label>
                <select name="reset-time" onChange={handleChangeRestTime} value={restTime}>
                    <option value={10}>10s (Pause)</option>
                    <option value={15}>15s (Pause)</option>
                    <option value={30}>30s (Pause)</option>
                </select>
            </div>
            <div className="select-wrapper icon-circle-down">
                <label htmlFor="repeat">Wie viele Wiederholungen?</label>
                <select name="repeat" onChange={handleChangeRepeat} value={repeat}>
                    <option value={2}>2 x Wiederholungen</option>
                    <option value={3}>3 x Wiederholungen</option>
                    <option value={5}>5 x Wiederholungen</option>
                    <option value={8}>8 x Wiederholungen</option>
                </select>
            </div>

            <button type="button"
                    className="button button-start"
                    onClick={handleStartClick}>
                start
            </button>
        </div>
    );

};
export default Fitness;
