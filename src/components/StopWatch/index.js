import React from 'react';

const StopWatch = () => {
    
    return (
        <div>
            <div className="timer-window">
                <div className="time-display timer-display">
                    00:00
                </div>
            </div>
            <div className="timer-options">
                <button className="timer-option">05 m</button>
                <button className="timer-option">15 m</button>
            </div>
            <div className="timer-options">
                <button className="timer-option">20 m</button>
                <button className="timer-option">30 m</button>
            </div>
            <div className="timer-options">
                <button className="timer-option">45 m</button>
                <button className="timer-option">60 m</button>
            </div>
        </div>
    );
}

export default StopWatch;
