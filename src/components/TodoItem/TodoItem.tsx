import classes from "./TodoItem.module.scss";
import React from "react";

const TodoItem: React.FC<{
	text: string;
	done: boolean;
	onRemoveTodo: () => void;
	onDoneTodo: () => void;
	onEditTodo: () => void;
}> = ({ text, done, onRemoveTodo, onEditTodo, onDoneTodo }) => {
	const cls = [classes.item];
	if (done) cls.push(classes.done);

	return (
		<li className={cls.join(" ")}>
			<span onClick={onDoneTodo}>{text}</span>
			<button onClick={onEditTodo}>edit</button>
			<button className={classes.remove} onClick={onRemoveTodo}>
				remove
			</button>
		</li>
	);
};

export default TodoItem;
