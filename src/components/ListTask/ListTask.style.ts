import styled from "styled-components";

export const StyledListTask = styled.div`
  width: 736px;
  margin: auto;
  padding-top: 64px;

  .listTask--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  strong {
    font-weight: 700;
    font-size: 14px;
    line-height: 16.94px;
    margin-right: 8px;
  }

  span {
    padding: 2px 8px;
    background-color: var(--gray-400);
    border-radius: 999px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14.52px;
    color: var(--gray-200);
  }

  .listTask--createTasksTitle {
    color: var(--blue);
  }

  .listTask--completedTasksTitle {
    color: var(--purple);
  }

  .listTask--taskContainer {
  }
`;
