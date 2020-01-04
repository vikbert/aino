import React from 'react';
import PropTypes from 'prop-types';
import "./ProcessBar.scss";

const ProcessBar = ({original, current}) => {
    const percent = () => {
        if (current === 0) {
            return "100%";
        }

        return (original - current) / original * 100 + "%";
    };

    return (
        <div className="process-bar">
            <div className="percent">{percent()}</div>
            <div className="segment" style={{width: percent()}}>
            </div>
        </div>
    );
};

ProcessBar.propTypes = {
    original: PropTypes.number,
    current: PropTypes.number,
};

export default ProcessBar;
