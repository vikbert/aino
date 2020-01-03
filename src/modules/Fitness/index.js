import React, {useState} from 'react';

let intervals = [];
const clearIntervals = () => {
    intervals.forEach(clearInterval);
    intervals = [];
};

const Fitness = () => {
    const [trainingTime, setTrainingTime] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [repeat, setRepeat] = useState(0);

    const handleChangeTrainingTime = (event) => {
        setTrainingTime(parseInt(event.currentTarget.value));
    };
    const handleChangeRestTime = (event) => {
        setRestTime(parseInt(event.currentTarget.value));
    };
    const handleChangeRepeat = (event) => {
        setRepeat(parseInt(event.currentTarget.value));
    };

    const playAlert = () => {
        window.alert.play(() => {
            console.log('play alert');
        });
    };

    const countDown = (counterInSeconds) => {
        clearIntervals();
        const alertOneAt = (counterInSeconds - restTime - 5);
        console.log('alert at: ' + alertOneAt);

        const intervalId = setInterval(() => {
            counterInSeconds--;
            console.log('current counterInSeconds: ' + counterInSeconds);

            if (counterInSeconds === alertOneAt) {
                playAlert();
                console.log('alert: 5 seconds countdown');
            }

            if (counterInSeconds === 0) {
                console.log('alert: rest completed');
                clearIntervals(intervalId);
                playAlert();
            }
        }, 1000);

        intervals.push(intervalId);
    };

    const handleStartClick = () => {

        const totalSeconds = (trainingTime + restTime) * 1;
        countDown(totalSeconds);
    };

    return (
        <div className="container fitness">
            <div className="select-wrapper icon-circle-down">
                <select onChange={handleChangeTrainingTime} value={trainingTime}>
                    <option value={0} disabled>Dauer-Zeit auswählen</option>
                    <option value={20}>05 Min (Training)</option>
                    <option value={10 * 60}>10 Min (Training)</option>
                    <option value={20 * 60}>20 Min (Training)</option>
                    <option value={30 * 60}>30 Min (Training)</option>
                </select>
            </div>
            <div className="select-wrapper icon-circle-down">
                <select onChange={handleChangeRestTime} value={restTime}>
                    <option value={0} disabled>Pause-Zeit auswählen</option>
                    <option value={5}>05 Min (Rest)</option>
                    <option value={10 * 60}>10 Min (Rest)</option>
                    <option value={15 * 60}>15 Min (Rest)</option>
                </select>
            </div>
            <div className="select-wrapper icon-circle-down">
                <select onChange={handleChangeRepeat} value={repeat}>
                    <option value={0} disabled>Wie viele Wiederholungen?</option>
                    <option value={2}>2 x Repeat</option>
                    <option value={3}>3 x Repeat</option>
                    <option value={4}>4 x Repeat</option>
                    <option value={5}>5 x Repeat</option>
                    <option value={6}>6 x Repeat</option>
                    <option value={7}>7 x Repeat</option>
                    <option value={8}>8 x Repeat</option>
                    <option value={9}>9 x Repeat</option>
                </select>
            </div>

            <button type="button"
                    className="button button-start"
                    onClick={handleStartClick}
                // disabled={trainingTime === 0 || restTime === 0 || repeat === 0}
            >
                start
            </button>
        </div>
    );

};
export default Fitness;
