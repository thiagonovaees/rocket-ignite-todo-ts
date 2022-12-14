import styled from "styled-components";

export const StyledInputTask = styled.div`
  .inputTask--form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: -27px auto;
    width: 736px;
  }

  .inputTask--input {
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--gray-500);
    border: 1px solid var(--gray-700);
    width: 100%;
    color: var(--gray-300);
    font-size: 1rem;
  }

  .inputTask--input:focus {
    outline: 1px solid var(--purple-dark);
    color: var(--gray-100);
  }

  .inputTask--button {
    padding: 1rem;
    background-color: var(--blue-dark);
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray-100);
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s;
    cursor: pointer;
  }

  .inputTask--button:hover {
    background-color: var(--blue);
  }
`;
