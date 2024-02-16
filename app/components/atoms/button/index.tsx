import { type IconType } from "react-icons";
import style from "./index.module.css";
import React, { useMemo } from "react";

interface Props {
  icon?: IconType;
  className?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = (props: Props): JSX.Element => {
  const className = props.className ?? "";

  const sizeStyle = useMemo(() => {
    switch (props.size) {
      case "small":
        return style.small;
      case "medium":
        return style.medium;
      case "large":
        return style.large;
      default:
        return style.medium;
    }
  }, [props.size]);

  return (
    <a
      className={`${sizeStyle} ${className} ${style.button}`}
      onClick={props.onClick}
    >
      {props.icon !== undefined && <props.icon className={style.icon} />}
      <p className={style.text}>{props.children}</p>
    </a>
  );
};

const Index = React.memo(Button);
export default Index;
