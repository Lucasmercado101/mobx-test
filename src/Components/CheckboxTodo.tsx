import { useRef } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import CheckTodoType from "../models/CheckTodo";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles({
  checked: {
    color: "#ffcc97"
  },
  root: {
    color: "#503e9d"
  }
});

type Props = {
  data: CheckTodoType;
};

const CheckTodo: React.FC<Props> = observer(({ data }) => {
  const { root, checked } = useStyles();
  const ref = useRef<HTMLElement>();

  return (
    <FormControlLabel
      classes={{ label: "edit-task-list__label" }}
      onInput={() => (data.label = ref.current!.innerText)}
      suppressContentEditableWarning
      contentEditable
      ref={ref}
      control={
        <Checkbox
          classes={{ checked: root, root: checked }}
          checked={data.isDone}
          onChange={() => data.toggle()}
          color="default"
          name="checkedA"
        />
      }
      label={data.label}
    />
  );
});

export default CheckTodo;
