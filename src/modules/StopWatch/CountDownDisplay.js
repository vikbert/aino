import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {secondsToTime} from "../../utils/TimeHelper";

let intervals = [];

const clearAllIntervals = () => {
    intervals.forEach(window.clearInterval);
    intervals = [];
};

const CountDownDisplay = ({counterInSeconds, resetOption = () => {}}) => {
    const [seconds, setSeconds] = useState(0);

    const countDown = useCallback((value) => {
        if (value === 0) {
            return;
        }

        clearAllIntervals();
        setSeconds(counterInSeconds);
        const intervalId = setInterval(() => {
            counterInSeconds--;
            setSeconds(counterInSeconds);
            if (counterInSeconds === 0) {
                clearAllIntervals();
                window.alert.play()
                    .then(() => {console.log('alert played');})
                    .catch((error) => {console.log(error);});
                resetOption();
            }
        }, 1000);
        intervals.push(intervalId);
    }, [counterInSeconds, resetOption]);

    useEffect(() => {
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
