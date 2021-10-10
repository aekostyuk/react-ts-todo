import classes from "./Todos.module.scss";
import React, { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import TodoItem from "../TodoItem/TodoItem";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					done={item.done}
					onRemoveTodo={() => todosCtx.removeTodo(item.id)}
					onDoneTodo={() => todosCtx.doneTodo(item.id)}
					onEditTodo={() => todosCtx.editTodo(item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
