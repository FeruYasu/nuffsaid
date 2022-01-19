import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 1rem;

  button {
    background-color: ${({ theme }) => theme.colors.info};
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 10rem;
  justify-content: center;
`;
