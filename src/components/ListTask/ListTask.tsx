import { Task } from "../Task/Task";
import { StyledListTask } from "./ListTask.style";

export function ListTask() {
  return (
    <StyledListTask>
      <header className="listTask--header">
        <div className="listTask--createTasks">
          <strong className="listTask--createTasksTitle">
            Tarefas Criadas
          </strong>
          <span className="listTask--createTasksNumber">5</span>
        </div>
        <div className="listTask--completedTasks">
          <strong className="listTask--completedTasksTitle">Concluídas</strong>
          <span className="listTask--completedTasksNumber">2 de 5</span>
        </div>
      </header>
      <main className="listTask--taskContainer">
        <Task />
        <Task />
        <Task />
      </main>
    </StyledListTask>
  );
}
