import classes from "./Modal.module.scss";
import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Modal: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	//const [inputText, setInputText] = useState<string>("");

	const cls = [classes.modal];
	let modal = null;

	if (todosCtx.modal) {
		cls.push(classes.active);
		modal = (
			<div className={cls.join(" ")}>
				<div className={classes["modal-content"]}>
					<span
						className={classes["modal-close"]}
						onClick={(e) => todosCtx.toggleModal(e)}
					>
						close
					</span>
					<form className={classes.form} onSubmit={todosCtx.onSubmitModal}>
						<Input
							type="text"
							label="Todo text"
							id="edit"
							value={todosCtx.modalText}
							onChangeHandler={todosCtx.onChangeModalText}
						/>
						<Button styling="big">Save Todo</Button>
					</form>
				</div>
			</div>
		);
	}

	return modal;
};

export default Modal;
