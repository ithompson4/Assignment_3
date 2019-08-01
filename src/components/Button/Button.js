import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = (props) => {

    const { children, buttonStyle, onClick } = props;

    return (
        <button 
            type="button"
            className={`${styles.button} ${styles[buttonStyle]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    buttonStyle: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;