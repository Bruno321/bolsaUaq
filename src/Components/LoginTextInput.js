import React from 'react';

const LoginTextInput = (props) => {
	const { labelText = "", placeHolder = "", textValue, setTextValue, inputType = "text" } = props;

	return (
		<div className='login-text-input'>
			<label >
				<p>{labelText}</p>
				<input
					placeholder={placeHolder}
					value={textValue}
					onChange={(e) => setTextValue(e.target.value)}
					type={inputType}
				/>
			</label>
		</div>
	);
}

export default LoginTextInput;