import { Trash } from "phosphor-react";
import { StyledTaskCard } from "./Task.style";

export function Task() {
  return (
    <StyledTaskCard>
      <label>
        <input type="checkbox" className="task--inputCheckbox" />
        <div className="task--taskText">
          <p className="task--taskText-paragrapher">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
        </div>
      </label>
      <div className="task--trashContainer">
        <Trash size={14} />
      </div>
    </StyledTaskCard>
  );
}
