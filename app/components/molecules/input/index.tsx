import { type IconType } from "react-icons";
import style from "./index.module.css";
import React, { type ChangeEventHandler, useMemo } from "react";
import { BsEye } from "react-icons/bs";

interface Props {
  icon?: IconType;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "email";
}

const Input = ({
  icon,
  onChange,
  size = "medium",
  type = "text",
}: Props): JSX.Element => {
  const Icon = icon;
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
    <div
      className={`${style.root} ${sizeStyle} ${type === "password" ? style.withPassword : ""} ${icon !== undefined ? style.withIcon : ""}`}
    >
      {Icon !== undefined && (
        <div>
          <Icon className={style.icon} />
        </div>
      )}
      <input type={type} onChange={onChange} className={`${style.input}`} />
    </div>
  );
};

const Index = React.memo(Input);
export default Index;
