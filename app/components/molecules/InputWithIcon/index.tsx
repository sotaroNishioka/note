import style from "./index.module.css";
import React, { type ChangeEventHandler, useMemo } from "react";
import { type IconType } from "react-icons";
import Input from "~/components/atoms/Input";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "email";
  variant?: "underline" | "outline";
  isError?: boolean;
  icon: IconType;
}

const InputWithIcon = ({
  onChange,
  size = "medium",
  type = "text",
  variant = "outline",
  isError = false,
  icon,
}: Props): JSX.Element => {
  const Icon = icon;
  const variantStyle = useMemo(() => {
    switch (variant) {
      case "underline":
        return style.underline;
      case "outline":
        return style.outline;
      default:
        return style.outline;
    }
  }, [variant]);

  const sizeStyle = useMemo(() => {
    switch (size) {
      case "small":
        return style.small;
      case "medium":
        return style.medium;
      case "large":
        return style.large;
      default:
        return style.medium;
    }
  }, [size]);

  const isErrorStyle = useMemo(() => {
    if (variant === "outline") {
      return style.errorOutline;
    }
    return style.errorUnderline;
  }, [variant]);

  return (
    <div
      className={`${style.root} ${sizeStyle} ${variantStyle} ${isError ? isErrorStyle : ""}`}
    >
      <div className={style.iconWrap}>
        <Icon className={style.icon} />
      </div>
      <Input type={type} size={size} onChange={onChange} />
    </div>
  );
};

const Index = React.memo(InputWithIcon);
export default Index;
