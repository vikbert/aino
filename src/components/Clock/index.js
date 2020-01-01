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
        <div className="main">
            <div className="clock hour">{today.toString().substr(15, 6)}</div>
            <div className="clock second">{today.toString().substr(22, 2)}</div>
        </div>
    );
};

export default Clock;
