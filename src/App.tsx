import Tasks from "./Pages/Tasks";
import NewTask from "./Pages/NewTask";
import EditTask from "./Pages/EditTask";
import Container from "@material-ui/core/Container";
import "./styles.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <Container disableGutters className="App" fixed maxWidth="xs">
      <Route exact path="/">
        <Tasks />
      </Route>
      <Route exact path="/newtask">
        <NewTask />
      </Route>
      <Route exact path="/editTask/:id">
        <EditTask />
      </Route>
    </Container>
  );
}

export default App;
