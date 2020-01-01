import React, {useState} from 'react';
import PropTypes from 'prop-types';

let intervals = [];
const clearIntervals = () => {
    intervals.forEach(clearInterval);
    intervals = [];
};

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);

    const countDown = (counter) => {
        clearIntervals();

        const intervalId = setInterval(() => {
            setSeconds(counter);
            counter--;
            if (counter === 0) {
                clearInterval(intervalId);
            }
        }, 1000);

        intervals.push(intervalId);
    };

    const secondsToTime = (counter) => {
        let hours = Math.floor(counter / 3600);
        let minutes = Math.floor((counter - (hours * 3600)) / 60);
        let seconds = counter - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return hours + ':' + minutes + ':' + seconds;
    };

    const TimerOptionButton = ({optionValue}) => {
        return (
            <button className="timer-option" onClick={() => countDown(optionValue * 60)}>
                {`${optionValue} m`}
            </button>
        );
    };

    TimerOptionButton.propTypes = {
        optionValue: PropTypes.number.isRequired,
    };

    return (
        <div>
            <div className="timer-window">
                <div className="time-display timer-display">
                    {secondsToTime(seconds)}
                </div>
            </div>
            <div className="timer-options">
                <TimerOptionButton optionValue={5}/>
                <TimerOptionButton optionValue={15}/>
            </div>
            <div className="timer-options">
                <TimerOptionButton optionValue={20}/>
                <TimerOptionButton optionValue={30}/>
            </div>
            <div className="timer-options">
                <TimerOptionButton optionValue={45}/>
                <TimerOptionButton optionValue={60}/>
            </div>
        </div>
    );
};

export default StopWatch;
