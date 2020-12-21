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
  return (
    <FormControlLabel
      classes={{ label: "edit-task-list__label" }}
      control={
        <Checkbox
          classes={{ checked: root, root: checked }}
          color="default"
          name="checkedA"
        />
      }
      label={data.label}
    />
  );
});

export default CheckTodo;
