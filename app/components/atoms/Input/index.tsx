import style from "./index.module.css";
import React, { type ChangeEventHandler, useMemo } from "react";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "email";
  variant?: "underline" | "outline";
}

const Input = ({
  onChange,
  size = "medium",
  type = "text",
  variant = "outline",
}: Props): JSX.Element => {
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

  return (
    <input
      type={type}
      onChange={onChange}
      className={`${variantStyle} ${sizeStyle}`}
    />
  );
};

const Index = React.memo(Input);
export default Index;
