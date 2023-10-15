export const TodoListServices = () => {
	let todoList = [
		{
			id: 1,
			value: "React Bootcamp",
		},
		{
			id: 2,
			value: "NodeJS Bootcamp",
		},
	];

	const getJsonTodoList = () => {
		return JSON.stringify({
			code: 200,
			status: "OK",
			data: todoList.map((todo) => ({
				id: todo.id,
				value: todo.value,
			})),
		});
	};

	const getTodoList = (req, res) => {
		res.setHeader("Content-Type", "application/json");
		res.write(getJsonTodoList());
		res.end();
	};

	const createTodo = (req, res) => {
		req.addListener("data", (data) => {
			const body = JSON.parse(data.toString());
			todoList.push({ id: body.id, value: body.value });

			res.write(getJsonTodoList());
			res.end();
		});
	};

	const updateTodo = (req, res) => {
		req.addListener("data", (data) => {
			const body = JSON.parse(data.toString());
			const isContainId = todoList.some((todo) => todo.id === body.id);
			if (isContainId) {
				const selectedTodo = todoList.find((item) => item.id === body.id);
				selectedTodo.value = body.value;
			}

			res.write(getJsonTodoList());
			res.end();
		});
	};

	const deleteTodo = (req, res) => {
		req.addListener("data", (data) => {
			const isContainId = todoList.some((todo) => todo.id === body.id);
			const body = JSON.parse(data.toString());
			if (isContainId) {
				todoList.splice(body.id, 1);
			}

			res.write(getJsonTodoList());
			res.end();
		});
	};

	return {
		getTodoList,
		createTodo,
		updateTodo,
		deleteTodo,
	};
};
