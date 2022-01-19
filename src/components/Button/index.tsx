import { ReactNode, ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleType?: "primary" | "secondary";
}

export const Button = ({
  styleType = "primary",
  children,
  ...rest
}: ButtonProps) => (
  <ButtonContainer styleType={styleType} {...rest}>
    {children}
  </ButtonContainer>
);
