import { css, styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6.5rem;

  gap: 1.5rem;
  margin-top: 5rem;

  background: ${({ theme }) => theme.colors["base-background"]};

  > div {
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      font-weight: 600;
      text-transform: uppercase;

      background: ${({ theme }) => theme.colors["brand-purple-light"]};

      padding: 0.5rem;
      margin-bottom: 2.75rem;

      border: none;
      border-radius: 999px;

      cursor: pointer;
    }
  }
`;

interface FooterButtonProps {
  variant: "purple";
}

export const FooterButton = styled.button<FooterButtonProps>`
  ${({ variant, theme }) => css`
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}
`;
