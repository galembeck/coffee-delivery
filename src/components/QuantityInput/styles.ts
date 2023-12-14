import { styled } from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 1;
  gap: 4px;
  border-radius: 6px;

  padding: 0.5rem;

  background: ${({ theme }) => theme.colors["base-button"]};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
