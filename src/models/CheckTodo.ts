import { v4 as uuidv4 } from "uuid";
import { makeAutoObservable } from "mobx";

class CheckTodo {
  public isDone: boolean = false;
  public id: string = uuidv4();

  constructor(public label: string) {
    makeAutoObservable(this);
  }

  public toggle() {
    this.isDone = !this.isDone;
  }
}

export default CheckTodo;
