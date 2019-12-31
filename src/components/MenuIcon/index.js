import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MenuIcon = ({clickCallback}) => (
    <>
        <input
            type="checkbox"
            className="menu-open-checkbox"
            name="menu-open"
            id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open" onClick={clickCallback}>
            <span className="lines line-1"/>
            <span className="lines line-2"/>
            <span className="lines line-3"/>
        </label>
    </>
);

MenuIcon.propTypes = {
    clickCallback: PropTypes.func.isRequired,
};

export default MenuIcon;
