import React, {useEffect, useState} from 'react';
import CountDownDisplay from "../StopWatch/CountDownDisplay";

let schedule = [];
const Fitness = () => {
    const [plan, setPlan] = useState({
        training: 30,
        rest: 10,
        repeat: 2,
    });
    const [touchedAt, setTouchedAt] = useState(null);
    const [nextCountDown, setNextCountDown] = useState(0);

    const handleOnChange = (event, name) => {
        setPlan({
            ...plan,
            [name]: event.currentTarget.value,
        });
    };

    const _toString = (time) => {
        return (new Date(time)).toString();
    };

    const handleStartClick = () => {
        setNextCountDown(plan.rest);
        for (let i = 0; i < plan.repeat; i++) {
            schedule.push(plan.training);
            schedule.push(plan.rest);
        }

        console.log('##### schedule');
        console.log(schedule);
    };
    // console.log('fitness counter: ' + nextCountDown);
    // console.log('fitness plan: ', plan);

    const handleReset = () => {
        setNextCountDown(0);
        setTouchedAt((new Date()).getTime());
    };

    const startNextCountDown = (touchedAt) => {
        if (schedule.length === 0) {
            console.log('!!!!! Do nothing, schedule empty !!!');
            return;
        }

        let next = schedule.shift();
        setNextCountDown(parseInt(next));
        console.log('##### starting the next count down: ' + next);
    };
    useEffect(() => {
        console.log('useEffect() TOUCHED AT: ', _toString(touchedAt));
        startNextCountDown(touchedAt);
    }, [touchedAt]);

    return (
        <div className="container fitness">
            <CountDownDisplay
                counterInSeconds={nextCountDown}
                resetOption={handleReset}
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
                        value={plan.test}>
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

            <div
                className="button button-start"
                onClick={handleStartClick}>
                <span>start</span>
            </div>
        </div>
    );

};
export default Fitness;
