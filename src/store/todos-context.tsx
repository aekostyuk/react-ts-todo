import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[];
	modal: boolean;
	toggleModal: (e: MouseEvent) => void;
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
	doneTodo: (id: string) => void;
	editTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	modal: false,
	toggleModal: (e: MouseEvent) => {},
	addTodo: () => {},
	removeTodo: (id: string) => {},
	doneTodo: (id: string) => {},
	editTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [modalActive, setModalActive] = useState<boolean>(false);

	const addTodoHandler = (text: string) => {
		console.log(text);
		const newTodo = new Todo(text);
		setTodos((prev) => prev.concat(newTodo));
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const doneTodoHandler = (id: string) => {
		const todoIdx = todos.findIndex((item) => item.id === id);
		const todosToChange = todos;
		todosToChange[todoIdx].done = !todosToChange[todoIdx].done;
		console.log(todoIdx);
		setTodos([...todosToChange]);
		console.log(id);
		console.log(todos);
	};

	const toogleModalHandler = (e: MouseEvent) => {
		e.stopPropagation();
		setModalActive((prev) => !prev);
	};

	const editTodoHandler = (id: string) => {
		console.log(id);
		setModalActive(true);
	};

	const contextValue: TodosContextObj = {
		items: todos,
		modal: modalActive,
		toggleModal: toogleModalHandler,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		doneTodo: doneTodoHandler,
		editTodo: editTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
