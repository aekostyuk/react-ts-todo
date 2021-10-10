import "./App.css";
import Modal from "./components/Modal/Modal";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
			<Modal />
		</TodosContextProvider>
	);
}

export default App;
