import classes from "./Input.module.scss";
import React from "react";

const Input = React.forwardRef<
	HTMLInputElement,
	{ label: string; type: string; id: string }
>((props, ref) => {
	return (
		<>
			<label className={classes.label} htmlFor={props.id}>
				{props.label}
			</label>
			<input
				className={classes.input}
				type={props.type}
				id={props.id}
				ref={ref}
			/>
		</>
	);
});

export default Input;
