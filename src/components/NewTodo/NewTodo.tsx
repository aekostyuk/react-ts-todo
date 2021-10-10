import classes from "./NewTodo.module.scss";
import { useState, useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	const [inputText, setInputText] = useState<string>("");

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = inputText;

		if (enteredText.trim().length === 0) return;

		todosCtx.addTodo(enteredText);
		setInputText("");
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				label="Todo text"
				type="text"
				id="text"
				value={inputText}
				onChangeHandler={onChangeHandler}
			/>
			<Button styling="big">Add Todo</Button>
		</form>
	);
};

export default NewTodo;
