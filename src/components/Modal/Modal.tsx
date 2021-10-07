import classes from "./Modal.module.scss";
import { useRef, useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Modal = () => {
	const todosCtx = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	console.log(todosCtx);

	const cls = [classes.modal];
	if (todosCtx.modal) cls.push(classes.active);

	return (
		<div className={cls.join(" ")} onClick={() => todosCtx.toggleModal}>
			<div className={classes["modal-content"]}>
				<form className={classes.form}>
					<Input
						type="text"
						label="Todo text"
						id="edit"
						ref={todoTextInputRef}
					/>
					<Button styling="big">Save Todo</Button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
