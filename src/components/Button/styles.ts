import styled, { css } from "styled-components";

interface ButtonContainerProps {
  styleType: "primary" | "secondary";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.info};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 20px;
  transition: all 0.3s;
  height: 48px;
  &:hover {
    filter: brightness(0.8);


  ${({ styleType }) => styleType === "secondary" && ButtonSecondary}
`;

const ButtonSecondary = css`
  color: ${({ theme }) => theme.colors.info};
`;
