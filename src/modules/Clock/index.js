import React, {useEffect, useState} from "react";

const Clock = () => {
    const [trigger, setTrigger] = useState(true);
    const today = new Date();

    useEffect(() => {
        setTimeout(function() {
            setTrigger(prevTrigger => !prevTrigger);
        }, 1000);
    });

    return (
        <div className="container clock-container">
            <div className="time-display hour">{today.toString().substr(15, 6)}</div>
        </div>
    );
};

export default Clock;
