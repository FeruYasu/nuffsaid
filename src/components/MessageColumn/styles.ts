import styled, { css } from "styled-components";

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
  font-weight: 700;

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
