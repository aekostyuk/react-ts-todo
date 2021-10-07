import classes from "./TodoItem.module.scss";
import React from "react";

const TodoItem: React.FC<{
	text: string;
	done: boolean;
	onRemoveTodo: () => void;
	onDoneTodo: () => void;
	onEditTodo: () => void;
}> = (props) => {
	const cls = [classes.item];
	if (props.done) cls.push(classes.done);

	return (
		<li className={cls.join(" ")}>
			<span onClick={props.onDoneTodo}>{props.text}</span>
			<button onClick={props.onEditTodo}>edit</button>
			<button className={classes.remove} onClick={props.onRemoveTodo}>
				remove
			</button>
		</li>
	);
};

export default TodoItem;
