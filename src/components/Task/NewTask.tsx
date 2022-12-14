import { Trash } from "phosphor-react";
import { StyledTaskCard } from "./NewTask.style";

interface TaskProps {
  task: Task;
  text: string;
  isCompleted: boolean;
}

export function NewTask(task: TaskProps) {
  return (
    <StyledTaskCard>
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          className="task--inputCheckbox"
        />
        <div className="task--taskText">
          <p className="task--taskText-paragrapher">{task.text}</p>
        </div>
        <div className="task--trashContainer">
          <Trash size={14} />
        </div>
      </label>
    </StyledTaskCard>
  );
}
