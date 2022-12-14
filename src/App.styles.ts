import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8284fa;
    --purple-dark: #5e60ce;
    --blue: #4EA8DE;
    --blue-dark: #1e6f9f;
    --red-danger: #E25858;

    --gray-700: #0d0d0d;
    --gray-600: #1a1a1a;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #d9d9d9;
    --gray-100: #f2f2f2;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    background-color: var(--gray-600);
  }
`;

export const StyledHeader = styled.header`
  background-color: var(--gray-700);
  height: 12.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    padding-right: 12px;
  }

  strong {
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 48.41px;
  }

  .logo--to {
    color: var(--blue);
  }

  .logo--do {
    color: var(--purple-dark);
  }
`;

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
