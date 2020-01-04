import React, {useEffect, useState} from "react";

const Clock = () => {
    const [trigger, setTrigger] = useState(true);
    const today = (new Date()).toString();

    useEffect(() => {
        const timeoutId = setInterval(function() {
            setTrigger(prevTrigger => !prevTrigger);
        }, 1000);
        console.log('Clock used timeoutID: ' + timeoutId);
    }, []);

    return (
        <div className="container clock-container">
            <div className="time-display hour">
                {today.substr(15, 3)}
                <span className={trigger ? "second" : ""}>{today.substr(18, 1)}</span>
                {today.substr(19, 2)}
            </div>
        </div>
    );
};

export default Clock;
