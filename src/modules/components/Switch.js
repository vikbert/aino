import React from 'react';
import PropTypes from 'prop-types';

import './Switch.scss';

const Switch = ({onChangeCallback}) => (
    <label className="switch">
        <input type="checkbox" onChange={onChangeCallback}/>
        <div></div>
    </label>
);

Switch.propTypes = {
    onChangeCallback: PropTypes.func.isRequired,
};

export default Switch;
