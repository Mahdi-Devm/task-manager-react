import { createContext, useState, useContext } from "react";

const OperatorContext = createContext();

function Operator({ children }) {
  const [count, setCount] = useState({});
  const [AddTask, setAddTask] = useState([]);

  return (
    <OperatorContext.Provider value={{ setCount, count, AddTask, setAddTask }}>
      {children}
    </OperatorContext.Provider>
  );
}

function ContextApi() {
  const { setCount, count, AddTask, setAddTask } = useContext(OperatorContext);
  console.log(count, AddTask);

  return { setCount, count, AddTask, setAddTask };
}

export { Operator, OperatorContext };
