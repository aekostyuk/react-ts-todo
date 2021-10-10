import classes from "./Input.module.scss";
import React from "react";

const Input: React.FC<{
	label: string;
	type: string;
	id: string;
	value: string;
	onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, type, id, value, onChangeHandler }) => {
	return (
		<>
			<label className={classes.label} htmlFor={id}>
				{label}
			</label>
			<input
				className={classes.input}
				type={type}
				id={id}
				value={value}
				onChange={onChangeHandler}
			/>
		</>
	);
};

export default Input;
