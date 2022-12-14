import rocket from "./assets/rocket.svg";
import { GlobalStyle, StyledHeader, StyledListTask } from "./App.styles";

import { useState } from "react";
import { InputTask } from "./components/InputTask/InputTask";
import { NewTask } from "./components/Task/NewTask";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuid(),
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isCompleted: true,
    },
    {
      id: uuid(),
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer (2).",
      isCompleted: true,
    },
    {
      id: uuid(),
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer (3).",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <img className="logo" src={rocket} alt="Logo do Rocjet To Do" />
        <strong className="logo--to">to</strong>
        <strong className="logo--do">do</strong>
      </StyledHeader>
      <InputTask />
      <StyledListTask>
        <header className="listTask--header">
          <div className="listTask--createTasks">
            <strong className="listTask--createTasksTitle">
              Tarefas Criadas
            </strong>
            <span className="listTask--createTasksNumber">5</span>
          </div>
          <div className="listTask--completedTasks">
            <strong className="listTask--completedTasksTitle">
              Concluídas
            </strong>
            <span className="listTask--completedTasksNumber">0 de 5</span>
          </div>
        </header>
        <main className="listTask--taskContainer">
          {tasks.map((task) => (
            <NewTask
              key={task.id}
              text={task.text}
              isCompleted={task.isCompleted}
            />
          ))}
        </main>
      </StyledListTask>
    </>
  );
}
