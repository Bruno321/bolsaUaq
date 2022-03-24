import React from 'react';

const LoginTextInput = (props) => {
	const { labelText = "", placeHolder = "", textValue, onChangeText, inputType = "text" } = props;

	return (
		<div style={styles.loginTextInput}>
			<label>
				<p style={styles.loginTextInputLabel}>{labelText}</p>
				<input
					style={styles.loginTextInputField}
					placeholder={placeHolder}
					value={textValue}
					onChange={onChangeText}
					type={inputType}
				/>
			</label>
		</div>
	);
}


const styles = {
	loginTextInput: {
		color: '#333',
		margin: '4px'
	},
	loginTextInputLabel: {
		fontSize: '12px',
		margin: '2px 4px'
	},
	loginTextInputField: {
		fontSize: '14px',
		backgroundColor: '#eee',
		border: '2px solid #999',
		width: '100%',
		borderRadius: '4px',
		padding: '4px',

		"&:focus": {
			border: '2px solid #4b3eb8',
			outline: 'none'
		}
	},

};

export default LoginTextInput;