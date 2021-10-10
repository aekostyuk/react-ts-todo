import "./App.css";
import { useContext } from "react";
import Modal from "./components/Modal/Modal";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosContextProvider from "./store/todos-context";
import { TodosContext } from "./store/todos-context";

function App() {
	const todosCtx = useContext(TodosContext);
	console.log(todosCtx.modal);

	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
			<Modal />
		</TodosContextProvider>
	);
}

export default App;
