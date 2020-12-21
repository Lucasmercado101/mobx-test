import { useRef, useContext } from "react";
import "../Styles/newTask.sass";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { State } from "../TodosState";
import { observer } from "mobx-react-lite";
import Todo from "../models/Todo";
import { useHistory } from "react-router-dom";

const EditTask: React.FC = observer(() => {
  const todos = useContext(State);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLElement>(null);
  const history = useHistory();

  const handleOnClick = () => {
    const title = titleRef.current?.innerText;
    const description = descriptionRef.current?.innerText;
    const defDescription =
      "If you want, add a description to help remind you what to get done";
    const newTodo = new Todo(
      title!,
      description === defDescription ? "" : description
    );
    todos.addTodo(newTodo);
    history.push("/");
  };

  return (
    <div className="new-task-page">
      <div className="new-task-page-top">
        <IconButton component={Link} to="/">
          <ArrowForwardIcon className="new-task-page-top__arrow" />
        </IconButton>
      </div>
      <div className="new-task-page-content">
        <h1
          className="new-task-page-content__title"
          suppressContentEditableWarning
          contentEditable
          ref={titleRef}
        >
          Enter Your Title
        </h1>
        <small
          className="new-task-page-content__subtitle"
          contentEditable
          suppressContentEditableWarning
          ref={descriptionRef}
        >
          If you want, add a description to help remind you what to get done
        </small>
      </div>
      <button onClick={handleOnClick} className="new-task-page__create-btn">
        Create Task
      </button>
    </div>
  );
});

export default EditTask;
