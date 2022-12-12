import rocket from "../../assets/rocket.svg";
import { StyledHeader } from "./Header.style";

export function Header() {
  return (
    <StyledHeader>
      <img className="logo" src={rocket} alt="Logo do Rocjet To Do" />
      <strong className="logo--to">to</strong>
      <strong className="logo--do">do</strong>
    </StyledHeader>
  );
}
