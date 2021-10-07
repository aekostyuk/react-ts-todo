import classes from "./NewTodo.module.scss";
import { useRef, useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) return;

		todosCtx.addTodo(enteredText);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input label="Todo text" type="text" id="text" ref={todoTextInputRef} />
			<Button styling="big">Add Todo</Button>
		</form>
	);
};

export default NewTodo;
