import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {secondsToTime} from "../../utils/TimeHelper";

let intervals = [];

const cleanAllIntervals = () => {
    intervals.forEach(clearInterval);
    intervals = [];
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
    }, [counterInSeconds, resetOption]);

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
