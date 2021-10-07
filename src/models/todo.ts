class Todo {
	id: string;
	text: string;
	done: boolean;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
		this.done = false;
	}
}

export default Todo;
