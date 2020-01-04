import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TimerDisplay from "./TimerDisplay";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedValue: 0};
    }

    handleClickOnOptionButton = (optionValue) => {
        this.setState({selectedValue: optionValue});
    };

    handleResetOption = () => {
        this.setState({selectedValue: 0});
    };

    handleOnClick = () => {
        this.setState({selectedValue: 0});
        this.child.reset();
    };

    render() {
        const {toggleBgColor} = this.props;
        const TimerOptionButton = ({optionValue, children = null}) => {
            const isSelected = optionValue === this.state.selectedValue;

            return (
                <button className={classNames("button timer-option", isSelected && "active")}
                        disabled={isSelected}
                        onClick={(event) => {
                            this.handleClickOnOptionButton(optionValue);
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
                <TimerDisplay
                    onRef={ref => (this.child = ref)}
                    counterInSeconds={this.state.selectedValue * 60}
                    resetOption={this.handleResetOption}
                />
                <div className="timer-options">
                    <button className="button timer-option" onClick={this.handleOnClick}>
                        {"clear"}
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
    }
}

Timer.propTypes = {
    toggleBgColor: PropTypes.func.isRequired,
};

export default Timer;
