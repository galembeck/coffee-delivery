import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  margin-top: 0.7rem;

  line-height: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  background: ${({ theme }) => theme.colors["brand-yellow"]};

  border: none;
  border-radius: 6px;

  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
