import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CountDownDisplay from "./CountDownDisplay";

const StopWatch = ({toggleBgColor}) => {
    const [selectedValue, setSelectedValue] = useState(0);

    const handleClickOnOptionButton = (optionValue) => {
        console.log('selected option(m): ' + selectedValue);
        setSelectedValue(optionValue);
    };

    const handleResetOption = () => {
        setSelectedValue(0);
    };

    const TimerOptionButton = ({optionValue, children = null}) => {
        const isSelected = optionValue === selectedValue;
        
        return (
            <button className={classNames("button timer-option", isSelected && "active")}
                    disabled={isSelected}
                    onClick={(event) => {
                        handleClickOnOptionButton(optionValue);
                    }}>
                {`${optionValue < 10 ? "0" + optionValue : optionValue} m`}
                {children}
            </button>
        );
    };

    TimerOptionButton.propTypes = {
        optionValue: PropTypes.number.isRequired,
        children: PropTypes.object,
    };

    return (
        <div className={classNames("container")}>
            <CountDownDisplay counterInSeconds={selectedValue * 60} resetOption={handleResetOption}/>
            <div className="timer-options">
                <button className="button timer-option" onClick={() => {
                }}>
                    {"00 m"}
                    <span className="icon-spinner11"/>
                </button>
                <TimerOptionButton optionValue={3}>
                    <span className="icon-grin"/>
                </TimerOptionButton>
            </div>
            <div className="timer-options">
                <TimerOptionButton optionValue={10}>
                    <span className="icon-mug"/>
                </TimerOptionButton>
                <TimerOptionButton optionValue={12}>
                    <span className="icon-local_pizza"/>
                </TimerOptionButton>
            </div>
            <div className="timer-options">
                <TimerOptionButton optionValue={25}>
                    <span className="icon-radio-checked"/>
                </TimerOptionButton>
                <TimerOptionButton optionValue={45}>
                    <span className="icon-bubbles4"/>
                </TimerOptionButton>
            </div>
        </div>
    );
};

StopWatch.propTypes = {
    toggleBgColor: PropTypes.func.isRequired,
};

export default StopWatch;
