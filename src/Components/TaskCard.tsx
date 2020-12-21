import React from "react";
import "../Styles/taskCard.sass";
import Checkbox from "@material-ui/core/Checkbox";

type Props = {
  idx: number;
  children: string;
  completed?: boolean;
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

const TaskCard: React.FC<Props> = ({ idx, children, completed }) => {
  const num = idx < 9 ? "0" + idx : idx;
  //40
  return (
    <div className={`task-card ${completed ? " task-card__completed" : ""}`}>
      <span className="task-card__idx">{num}</span>
      <p className="task-card__content">{computedContent(children)}</p>
      <Checkbox
        className="task-card__checkbox"
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default TaskCard;
