import React, { useMemo } from "react";
import style from "./index.module.css";

interface Props {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const ButtonText = ({ size = "medium", children }: Props): JSX.Element => {
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

  return <p className={sizeStyle}>{children}</p>;
};

const Index = React.memo(ButtonText);
export default Index;
