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
            <span className="clock hour">{today.toString().substr(15, 6)}</span>
            <span className="clock second">{today.toString().substr(22, 2)}</span>
        </div>
    );
};

export default Clock;
