import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid var(--color-base);
  padding: 1rem 2.5rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  font-weight: 400;
  background-color: #fff;
  color: var(--color-base);
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-base);
    color: #fff;
  }
`;

// #ff0043
const StyledSecondaryButton = styled.button`
  position: relative;
  padding: 13px 30px;
  font-size: 16px;
  text-transform: capitalize;
  border: 1px solid #ff0043;
  background-color: #ff0043;
  border-radius: 6px;
  color: #fff;
  font-weight: 400;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export function BtnSecondary({ children }) {
  return <StyledSecondaryButton>{children}</StyledSecondaryButton>;
}

export default Button;
