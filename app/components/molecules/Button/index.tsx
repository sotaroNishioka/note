import React, { type MouseEventHandler } from "react";
import ButtonOuter from "~/components/atoms/ButtonOuter";
import ButtonText from "~/components/atoms/ButtonText";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outline" | "contained";
  type?: "submit" | "danger" | "info";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
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
      <ButtonText size={size} type={type}>
        {children}
      </ButtonText>
    </ButtonOuter>
  );
};

const Index = React.memo(Button);
export default Index;
