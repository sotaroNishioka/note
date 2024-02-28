import React, { useMemo } from "react";
import style from "./index.module.css";

interface Props {
  size?: "subtext" | "text" | "strong" | "h5" | "h4" | "h3" | "h2" | "h1";
  type?: "black" | "danger" | "warn" | "info";
  children: React.ReactNode;
}

const Text = ({
  size = "text",
  type = "black",
  children,
}: Props): JSX.Element => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "subtext":
        return style.subtext;
      case "text":
        return style.text;
      case "strong":
        return style.strong;
      case "h5":
        return style.h5;
      case "h4":
        return style.h4;
      case "h3":
        return style.h3;
      case "h2":
        return style.h2;
      case "h1":
        return style.h1;
      default:
        return style.text;
    }
  }, [size]);

  const typeStyle = useMemo(() => {
    switch (type) {
      case "black":
        return style.black;
      case "danger":
        return style.danger;
      case "warn":
        return style.warn;
      case "info":
        return style.info;
      default:
        return style.black;
    }
  }, [type]);

  return <p className={`${typeStyle} ${sizeStyle}`}>{children}</p>;
};

const Index = React.memo(Text);
export default Index;
