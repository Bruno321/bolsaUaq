import React from "react";

const Button = (props) => {
    return (
        <button style={{...styles.button, ...props.styles}}>
            {props.title}
        </button>
    )
}

export default Button;

let styles = {
    button: {
        width: '20rem',
        borderRadius: '5px',
        border: '1px solid blue',
        fontSize: '16px',
        cursor: 'pointer',
        padding: '8px',
    }
}
