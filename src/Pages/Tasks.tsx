import { useContext } from "react";
import "../Styles/tasks.sass";
import TaskCard from "../Components/TaskCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { State } from "../TodosState";
import { observer } from "mobx-react-lite";

const Tasks: React.FC = observer(() => {
  const todos = useContext(State).todos;
  return (
    <div id="tasks-page">
      <h1 id="notes-title-date">
        May 5th
        <br /> 2020
      </h1>
      <ul className="tasks-list">
        {todos.map((todo, i) => (
          <li className="tasks-list__item" key={todo.id}>
            <TaskCard idx={i + 1} todo={todo} />
          </li>
        ))}
      </ul>
      <div className="add-new-task">
        <p className="add-new-task__title">Create a new Task</p>
        <Fab
          component={Link}
          to="newtask"
          className="add-new-task__button"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
});

export default Tasks;
