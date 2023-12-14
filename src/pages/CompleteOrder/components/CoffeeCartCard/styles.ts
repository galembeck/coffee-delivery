import { styled } from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  margin-top: 0.5rem;
  height: 2rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;

  height: 100%;
  gap: 0.25rem;
  padding: 0 0.5rem;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  background: ${({ theme }) => theme.colors["base-button"]};
  border: none;
  border-radius: 6px;

  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`;
