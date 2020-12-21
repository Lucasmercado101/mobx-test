import { v4 as uuidv4 } from "uuid";
import { makeAutoObservable } from "mobx";
import CheckTodo from "./CheckTodo";

class Todo {
  public isDone: boolean = false;
  public id: string = uuidv4();
  public checkTodos: CheckTodo[] = [];

  constructor(public title: string, public description?: string) {
    makeAutoObservable(this);
  }

  public toggle() {
    this.isDone = !this.isDone;
  }
}

export default Todo;
