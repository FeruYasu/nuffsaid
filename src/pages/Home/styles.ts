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

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26vw;
  gap: 1rem;
  margin-bottom: 2rem;
`;

interface CardProps {
  styleType: "error" | "warning" | "info";
}

export const Card = styled.div<CardProps>`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.error};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  button {
    margin-top: 1rem;
    margin-left: auto;
    display: block;
  }

  ${({ styleType }) => styleType === "warning" && CardWarning}
  ${({ styleType }) => styleType === "info" && CardInfo}
`;

const CardWarning = css`
  background-color: ${({ theme }) => theme.colors.warning};
`;

const CardInfo = css`
  background-color: ${({ theme }) => theme.colors.info};
`;
