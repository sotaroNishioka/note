import React, { type MouseEventHandler } from "react";
import ButtonOuter from "~/components/atoms/ButtonOuter";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outline" | "contained";
  type?: "submit" | "danger" | "info";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({
  size = "medium",
  variant = "outline",
  type = "info",
  onClick,
  children,
}: Props): JSX.Element => {
  return (
    <ButtonOuter size={size} variant={variant} type={type} onClick={onClick}>
      {children}
    </ButtonOuter>
  );
};

const Index = React.memo(Button);
export default Index;
