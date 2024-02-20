import React, { type MouseEventHandler, useMemo } from "react";
import style from "./index.module.css";

interface Props {
  size: "small" | "medium" | "large";
  variant: "text" | "outline" | "contained";
  type: "submit" | "danger" | "info";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}

const ButtonOuter = ({
  size = "medium",
  variant = "contained",
  type = "submit",
  onClick,
  children,
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

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "text":
        return style.text;
      case "outline":
        return style.outline;
      case "contained":
        return style.contained;
      default:
        return style.contained;
    }
  }, [variant]);

  const typeStyle = useMemo(() => {
    switch (type) {
      case "submit":
        return style.submit;
      case "danger":
        return style.danger;
      case "info":
        return style.info;
      default:
        return style.submit;
    }
  }, [type]);

  return (
    <a
      className={`${typeStyle} ${variantStyle} ${sizeStyle} ${style.button}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const Index = React.memo(ButtonOuter);
export default Index;
