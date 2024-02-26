import style from "./index.module.css";
import React, { type ChangeEventHandler, useMemo } from "react";
import Input from "~/components/atoms/Input";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "email";
  variant?: "underline" | "outline";
  isError?: boolean;
}

const InputElement = ({
  onChange,
  size = "medium",
  type = "text",
  variant = "outline",
  isError = false,
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
      <Input type={type} size={size} onChange={onChange} />
    </div>
  );
};

const Index = React.memo(InputElement);
export default Index;
