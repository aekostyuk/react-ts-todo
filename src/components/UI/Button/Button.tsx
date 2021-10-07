import classes from "./Button.module.scss";

const Button: React.FC<{ styling: string }> = (props) => {
	const { styling } = props;
	const cls = [classes.button];
	if (styling) cls.push(classes[styling]);

	return <button className={cls.join(" ")}>{props.children}</button>;
};

export default Button;
