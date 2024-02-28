import React, { useMemo, type MouseEventHandler } from "react";
import { type IconType } from "react-icons";
import ButtonOuter from "~/components/atoms/ButtonOuter";
import style from "~/components/molecules/Button/index.module.css";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outline" | "contained";
  type?: "submit" | "danger" | "info";
  icon?: IconType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({
  size = "medium",
  variant = "outline",
  type = "info",
  icon,
  onClick,
  children,
}: Props): JSX.Element => {
  const Icon = icon;
  const iconStyle = useMemo(() => {
    switch (size) {
      case "small":
        return style.iconSmall;
      case "medium":
        return style.iconMedium;
      case "large":
        return style.iconLarge;
      default:
        return style.iconMedium;
    }
  }, [size]);
  return (
    <ButtonOuter size={size} variant={variant} type={type} onClick={onClick}>
      {Icon !== undefined && (
        <div className={style.iconWrap}>
          <Icon className={iconStyle} />
        </div>
      )}
      {children}
    </ButtonOuter>
  );
};

const Index = React.memo(Button);
export default Index;
