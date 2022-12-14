import { PlusCircle } from "phosphor-react";
import { StyledInputTask } from "./InputTask.style";

export function InputTask() {
  return (
    <StyledInputTask>
      <div className="inputTask--form">
        <input
          className="inputTask--input"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          className="inputTask--button"
          type="submit"
          onClick={() => {
            console.log("Click");
          }}
        >
          Criar <PlusCircle size={16} weight={"bold"} />
        </button>
      </div>
    </StyledInputTask>
  );
}
