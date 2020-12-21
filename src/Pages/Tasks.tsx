import { FC } from "react";
import "../Styles/tasks.sass";
import TaskCard from "../Components/TaskCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Tasks: FC = () => {
  return (
    <div id="tasks-page">
      <h1 id="notes-title-date">
        May 5th
        <br /> 2020
      </h1>
      <ul className="tasks-list">
        <li className="tasks-list__item">
          <TaskCard completed idx={1}>
            Don't forget to do the laundry
          </TaskCard>
        </li>
        <li className="tasks-list__item">
          <TaskCard idx={2}>
            Pick up a Nintendo Switch for the kids at home
          </TaskCard>
        </li>
        <li className="tasks-list__item">
          <TaskCard idx={3}>Get groceries for the entire week</TaskCard>
        </li>
      </ul>
      <div className="add-new-task">
        <p className="add-new-task__title">Create a new Task</p>
        <Fab className="add-new-task__button" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Tasks;
