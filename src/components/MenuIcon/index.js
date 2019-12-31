import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MenuIcon = ({clickCallback}) => (
    <div className={'menu-icon'}>
        <input
            onClick={clickCallback}
            type="checkbox"
            className="menu-open"
            name="menu-open"
            id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1"/>
            <span className="lines line-2"/>
            <span className="lines line-3"/>
        </label>
    </div>
);

MenuIcon.propTypes = {
    clickCallback: PropTypes.func.isRequired,
};

export default MenuIcon;
