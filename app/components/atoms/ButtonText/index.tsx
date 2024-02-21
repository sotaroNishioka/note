import React, { useMemo } from "react";
import style from "./index.module.css";

interface Props {
  size?: "small" | "medium" | "large";
  type?: "submit" | "danger" | "info";
  children: React.ReactNode;
}

const ButtonText = ({
  size = "medium",
  type = "info",
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

  return <p className={`${sizeStyle} ${typeStyle}`}>{children}</p>;
};

const Index = React.memo(ButtonText);
export default Index;
