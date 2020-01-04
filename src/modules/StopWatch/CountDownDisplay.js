import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

let intervals = [];

const cleanAllIntervals = () => {
    intervals.forEach(clearInterval);
    intervals = [];
};
const secondsToTime = (secondsValue) => {
    let hours = Math.floor(secondsValue / 3600);
    let minutes = Math.floor((secondsValue - (hours * 3600)) / 60);
    let seconds = secondsValue - (hours * 3600) - (minutes * 60);

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

const CountDownDisplay = ({counterInSeconds, resetOption = () => {}}) => {
    const [seconds, setSeconds] = useState(0);

    const countDown = useCallback((value) => {
        if (value === 0) {
            return;
        }
        
        setSeconds(counterInSeconds);
        const intervalId = setInterval(() => {
            counterInSeconds--;
            setSeconds(counterInSeconds);
            if (counterInSeconds === 0) {
                clearInterval(intervalId);
                resetOption();
                window.alert.play();
            }

        }, 1000);
        intervals.push(intervalId);
    }, [counterInSeconds]);

    useEffect(() => {
        cleanAllIntervals();
        countDown(counterInSeconds);
    }, [countDown, counterInSeconds]);

    return (
        <div className="timer-window">
            <div className="time-display timer-display">
                {secondsToTime(seconds)}
            </div>
        </div>
    );
};

CountDownDisplay.propTypes = {
    counterInSeconds: PropTypes.number,
    resetOption: PropTypes.func,
};

export default CountDownDisplay;
