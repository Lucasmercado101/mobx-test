import "../Styles/newTask.sass";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checked: {
    color: "#ffcc97"
  },
  root: {
    color: "#503e9d"
  }
});

const NewTask: React.FC = () => {
  const { root, checked } = useStyles();
  return (
    <div className="new-task-page">
      <div className="new-task-page-top">
        <ul className="new-task-page-top__progress">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <IconButton>
          <ArrowForwardIcon className="new-task-page-top__arrow" />
        </IconButton>
      </div>
      <div className="new-task-page-content">
        <h1 className="new-task-page-content__title">
          Prep some more dribbble shots
        </h1>
        <small className="new-task-page-content__subtitle">
          This is an additional field of text that can be written to clarify the
          task
        </small>
        <ul className="new-task-list">
          <li>
            <FormControlLabel
              classes={{ label: "new-task-list__label" }}
              control={
                <Checkbox
                  classes={{ checked: root, root: checked }}
                  color="default"
                  name="checkedA"
                />
              }
              label="Buy all fruit groceries for the weekend"
            />
          </li>
          <li>
            <FormControlLabel
              classes={{ label: "new-task-list__label" }}
              control={
                <Checkbox
                  classes={{ checked: root, root: checked }}
                  color="default"
                  name="checkedA"
                />
              }
              label="pick up a nintendo"
            />
          </li>
          <li>
            <FormControlLabel
              classes={{ label: "new-task-list__label" }}
              control={
                <Checkbox
                  classes={{ checked: root, root: checked }}
                  color="default"
                  name="checkedA"
                />
              }
              label="submit today's invoice"
            />
          </li>
        </ul>
      </div>
      <div className="new-task-page-buttons">
        <button className="new-task-page-buttons__begin">Begin Task</button>
        <IconButton className="new-task-page-buttons__check">
          <CheckIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default NewTask;
