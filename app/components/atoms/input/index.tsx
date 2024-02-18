import style from "./index.module.css";
import React, { type ChangeEventHandler, useMemo } from "react";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "email";
}

const Input = ({
  onChange,
  size = "medium",
  type = "text",
}: Props): JSX.Element => {
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
      className={`${style.root} ${sizeStyle}`}
    />
  );
};

const Index = React.memo(Input);
export default Index;
