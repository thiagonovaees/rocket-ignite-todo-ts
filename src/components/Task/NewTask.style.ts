import styled from "styled-components";

export const StyledTaskCard = styled.div`
  background-color: var(--gray-500);
  padding: 1rem;
  border-radius: 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;

  .task--inputCheckbox {
    display: none;
  }

  .task--taskText {
    display: flex;
    align-items: center;
    color: var(--gray-100);
    font-weight: 400;
    line-height: 19.6px;
  }

  .task--taskText:hover {
    color: var(--blue-dark);
  }

  .task--inputCheckbox + .task--taskText:before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("src/assets/Checked=false, Hover=false.svg") no-repeat;
  }

  .task--inputCheckbox + .task--taskText:hover:before {
    background: url("src/assets/Checked=false, Hover=true.svg") no-repeat;
    color: var(--blue-dark);
  }

  .task--inputCheckbox:checked + .task--taskText:before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("src/assets/Checked=true, Hover=false.svg") no-repeat;
  }

  .task--inputCheckbox:checked + .task--taskText:hover:before {
    background: url("src/assets/Checked=true, Hover=true.svg") no-repeat;
  }

  .task--inputCheckbox:checked + .task--taskText {
    text-decoration: line-through;
    color: var(--gray-300);
  }

  label {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  p {
    padding-left: 40px;
    font-size: 14px;
  }

  .task--trashContainer {
    padding: 6px;
    cursor: pointer;
    display: flex;
    background-color: var(--gray-500);
    color: var(--gray-300);
    border-radius: 4px;
  }

  .task--trashContainer:hover {
    color: var(--red-danger);
    background-color: var(--gray-400);
  }
`;
