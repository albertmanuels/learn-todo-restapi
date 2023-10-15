import http from "http";
import { TodoListServices } from "./todolist-services.mjs";

const { getTodoList, createTodo, updateTodo, deleteTodo } = TodoListServices();

const server = http.createServer((request, response) => {
	switch (request.method) {
		case "GET":
			getTodoList(request, response);
			break;
		case "POST":
			createTodo(request, response);
			break;
		case "PUT":
			updateTodo(request, response);
			break;
		case "DELETE":
			deleteTodo(request, response);
			break;
		default:
			return;
	}
});

server.listen(3000);
