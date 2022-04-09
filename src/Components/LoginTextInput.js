import React from 'react';
import './LoginTextInput.css'

const LoginTextInput = (props) => {
	const { labelText = "", placeHolder = "", textValue, onChangeText, inputType = "text" } = props;

	return (
		<div className='loginTextInput'>
			<label>
				<p>{labelText}</p>
				<input
					placeholder={placeHolder}
					value={textValue}
					onChange={onChangeText}
					type={inputType}
				/>
			</label>
		</div>
	);
}

export default LoginTextInput;