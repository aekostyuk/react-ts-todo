import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[];
	modal: boolean;
	modalText: string;
	toggleModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
	doneTodo: (id: string) => void;
	editTodo: (id: string) => void;
	onChangeModalText: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmitModal: (event: React.FormEvent) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	modal: false,
	modalText: "",
	toggleModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {},
	addTodo: () => {},
	removeTodo: (id: string) => {},
	doneTodo: (id: string) => {},
	editTodo: (id: string) => {},
	onChangeModalText: (event: React.ChangeEvent<HTMLInputElement>) => {},
	onSubmitModal: (event: React.FormEvent) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [modalText, setModalText] = useState<string>("");
	const [currentTodo, setCurrentTodo] = useState<string>("");

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prev) => prev.concat(newTodo));
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const doneTodoHandler = (id: string) => {
		const todoIdx = todos.findIndex((item) => item.id === id);
		const todosToChange = [...todos];
		todosToChange[todoIdx].done = !todosToChange[todoIdx].done;
		setTodos([...todosToChange]);
	};

	const toogleModalHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		//e.nativeEvent.stopImmediatePropagation();
		setModalActive((prev) => !prev);
	};

	const editTodoHandler = (id: string) => {
		const todo = todos.find((item) => item.id === id)!;
		setModalText(todo.text);
		setModalActive(true);
		setCurrentTodo(todo.id);
	};

	const onChandeModalTextHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setModalText(event.target.value);
	};

	const onSubmitModalHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const todoIdx = todos.findIndex((item) => item.id === currentTodo)!;
		const todosToChange = [...todos];
		todosToChange[todoIdx].text = modalText;
		setTodos([...todosToChange]);
		setModalActive(false);
	};

	const contextValue: TodosContextObj = {
		items: todos,
		modal: modalActive,
		modalText: modalText,
		toggleModal: toogleModalHandler,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		doneTodo: doneTodoHandler,
		editTodo: editTodoHandler,
		onChangeModalText: onChandeModalTextHandler,
		onSubmitModal: onSubmitModalHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
