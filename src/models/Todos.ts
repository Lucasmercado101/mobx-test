import Todo from "./Todo";
import { makeAutoObservable } from "mobx";

export default class Todos {
  public todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }
}
