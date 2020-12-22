import { useContext, useEffect, useRef } from "react";
import "../Styles/editTask.sass";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import { Link, useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { State } from "../TodosState";
import CheckboxTodo from "../Components/CheckboxTodo";
import CheckTodo from "../models/CheckTodo";

const EditTask: React.FC = observer(() => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLElement>(null);
  const { id } = useParams<{ id: string }>();
  const todos = useContext(State);
  const todo = todos.getTodo(id);
  const history = useHistory();

  useEffect(() => {
    todo || history.push("/");
  }, [todo, history]);

  const onDelete = () => {
    todos.removeTodo(id);
    history.push("/");
  };

  const addSubTask = () => {
    todo?.checkTodos.push(new CheckTodo("Do something"));
  };

  const handleConfirm = () => {
    const title = titleRef.current!.innerText;
    const description = descriptionRef.current!.innerText;
    const defaultDescription =
      "This is an additional field of text that can be written to clarify the task";
    todo!.title = title;
    todo!.description = description === defaultDescription ? "" : description;
    history.push("/");
  };

  return (
    <div className="edit-task-page">
      <div className="edit-task-page-top">
        <IconButton component={Link} to="/">
          <ArrowForwardIcon className="edit-task-page-top__arrow" />
        </IconButton>
      </div>
      <div className="edit-task-page-content">
        <h1
          className="edit-task-page-content__title"
          contentEditable
          suppressContentEditableWarning
          ref={titleRef}
        >
          {todo?.title}
        </h1>
        <small
          className="edit-task-page-content__subtitle"
          contentEditable
          suppressContentEditableWarning
          ref={descriptionRef}
        >
          {todo?.description ||
            "This is an additional field of text that can be written to clarify the task"}
        </small>
      </div>
      <ul className="edit-task-list">
        {todo?.checkTodos.map((todo) => (
          <li key={todo.id}>
            <CheckboxTodo data={todo} />
          </li>
        ))}
      </ul>
      <IconButton onClick={addSubTask} className="edit-task-add-subtodo">
        <AddIcon />
      </IconButton>
      <div className="edit-task-page-buttons">
        <button onClick={onDelete} className="edit-task-page-buttons__begin">
          Delete Task
        </button>
        <IconButton
          onClick={handleConfirm}
          className="edit-task-page-buttons__check"
        >
          <CheckIcon />
        </IconButton>
      </div>
    </div>
  );
});

export default EditTask;
