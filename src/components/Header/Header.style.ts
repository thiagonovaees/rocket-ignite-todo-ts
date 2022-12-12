import styled from "styled-components";
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
