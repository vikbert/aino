import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import Switch from "../components/Switch";

const Clock = ({handleTogglePageColor}) => {
    const [trigger, setTrigger] = useState(true);
    const today = (new Date()).toString();

    useEffect(() => {
        const timeoutId = setInterval(function() {
            setTrigger(prevTrigger => !prevTrigger);
        }, 1000);
        console.log('Clock used timeoutID: ' + timeoutId);
    }, []);

    return (
        <div className="container container-clock">
            <div className="wrapper-clock">
                <div className="time-display hour">
                    {today.substr(15, 3)}
                    <span className={trigger ? "second" : ""}>{today.substr(18, 1)}</span>
                    {today.substr(19, 2)}
                </div>
            </div>
            <div className="wrapper-switch">
                <Switch onChangeCallback={handleTogglePageColor}/>
            </div>
        </div>
    );
};

Clock.propTypes = {
    handleTogglePageColor: PropTypes.func.isRequired,
};

export default Clock;
