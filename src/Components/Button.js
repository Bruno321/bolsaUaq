import React, {useState} from "react";

const Button = (props) => {

    const [hoverButton, setHoverButton] = useState({...styles.button, ...props.styles});

    return (
        <button style={{...hoverButton}} onClick={props.click} 
            onMouseEnter={()=>setHoverButton({...hoverButton, background: 'rgba(133, 129, 201, 0.8)', color: 'white'})}
            onMouseLeave={()=>setHoverButton({...hoverButton, ...props.styles})}
        >
            {props.title}
        </button>
    )
}

export default Button;

let styles = {
    button: {
        width: '100%',
        borderRadius: '5px',
        border: '1px solid blue',
        fontSize: '16px',
        cursor: 'pointer',
        padding: '8px',
    }
}
