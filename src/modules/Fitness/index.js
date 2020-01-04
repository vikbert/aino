import React, {useEffect, useState} from 'react';
import CountDownDisplay from "../StopWatch/CountDownDisplay";
import {clearAllIntervals} from "../../utils/IntervalHelper";

let schedule = [];
const initPlan = {
    training: 30,
    rest: 10,
    repeat: 2,
};
const Fitness = () => {
    const [plan, setPlan] = useState(initPlan);
    const [touchedAt, setTouchedAt] = useState(null);
    const [nextCountDown, setNextCountDown] = useState(0);

    const handleOnChange = (event, name) => {
        setPlan({
            ...plan,
            [name]: event.currentTarget.value,
        });
    };

    const handleClickStart = () => {
        schedule = [];
        for (let i = 0; i < plan.repeat; i++) {
            schedule.push(parseInt(plan.training));
            schedule.push(parseInt(plan.rest));
        }
        setTouchedAt((new Date()).getTime());
    };

    const handleClickCancel = () => {
        schedule = [];
        clearAllIntervals();

        setPlan(initPlan);
        setTouchedAt(null);
        setNextCountDown(0);
    };

    const handleResetCallback = () => {
        setNextCountDown(0);
        if (schedule.length === 0) {
            setTouchedAt(null);
        } else {
            setTouchedAt((new Date()).getTime());
        }
    };

    const startNextCountDown = (touchedAt) => {
        if (schedule.length === 0) {
            return;
        }

        let next = schedule.shift();
        setNextCountDown(parseInt(next));
        console.log(schedule);
    };

    useEffect(() => {
        startNextCountDown(touchedAt);
    }, [touchedAt]);

    return (
        <div className="container fitness">
            <CountDownDisplay
                counterInSeconds={nextCountDown}
                resetOption={handleResetCallback}
            />
            <div className="select-wrapper icon-circle-down">
                <label htmlFor="training">Training-Zeit auswählen</label>
                <select name="training"
                        onChange={(event) => handleOnChange(event, 'training')}
                        value={plan.training}>
                    <option value={30}>30s (Training)</option>
                    <option value={40}>40s (Training)</option>
                    <option value={50}>50s (Training)</option>
                    <option value={60}>60s (Training)</option>
                </select>
            </div>
            <div className="select-wrapper icon-circle-down">
                <label htmlFor="rest">Pause-Zeit auswählen</label>
                <select name="rest"
                        onChange={(event) => handleOnChange(event, 'rest')}
                        value={plan.rest}>
                    <option value={10}>10s (Pause)</option>
                    <option value={15}>15s (Pause)</option>
                    <option value={30}>30s (Pause)</option>
                </select>
            </div>
            <div className="select-wrapper icon-circle-down">
                <label htmlFor="repeat">Wie viele Wiederholungen?</label>
                <select name="repeat"
                        onChange={(event) => handleOnChange(event, 'repeat')}
                        value={plan.repeat}>
                    <option value={2}>2 x Wiederholungen</option>
                    <option value={3}>3 x Wiederholungen</option>
                    <option value={5}>5 x Wiederholungen</option>
                    <option value={8}>8 x Wiederholungen</option>
                </select>
            </div>

            {touchedAt === null
                ? (
                    <div
                        className="button button-start"
                        onClick={handleClickStart}>
                        <span>Start</span>
                    </div>
                )
                : (
                    <div
                        className="button button-cancel"
                        onClick={handleClickCancel}>
                        <span>Cancel</span>
                    </div>
                )
            }

        </div>
    );

};
export default Fitness;
