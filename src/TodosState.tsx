import { createContext } from "react";
import Todos from "./models/Todos";

export const State = createContext<Todos>(new Todos());

const TodosState: React.FC = ({ children }) => {
  return <State.Provider value={new Todos()}>{children}</State.Provider>;
};

export default TodosState;
