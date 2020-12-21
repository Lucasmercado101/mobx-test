import React from "react";
import "../Styles/taskCard.sass";
import Checkbox from "@material-ui/core/Checkbox";
import Todo from "../models/Todo";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

type Props = {
  idx: number;
  todo: Todo;
};

const computedContent = (text: string) => {
  // If "text" is longer than maxLength it cuts off and adds an ellipsis
  let result = text.split(" ");
  const maxLength = 30;
  let temp = 0;
  let it = 0;

  const isTooLong = result.some((word) => {
    temp += word.length;
    if (temp > maxLength) {
      return true;
    }
    it++;
    return false;
  });

  if (isTooLong) {
    return result.slice(0, it).join(" ") + " ...";
  }

  return text;
};

const TaskCard: React.FC<Props> = observer(({ idx, todo }) => {
  const num = idx < 9 ? "0" + idx : idx;
  const completed = todo.isDone;

  return (
    <div className={`task-card ${completed ? " task-card__completed" : ""}`}>
      <span className="task-card__idx">{num}</span>
      <Link
        to={`/editTask/${todo.id}`}
        title={todo.title}
        className="task-card__content"
      >
        {computedContent(todo.title)}
      </Link>
      <Checkbox
        onChange={() => todo.toggle()}
        checked={completed}
        className="task-card__checkbox"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
});

export default TaskCard;
