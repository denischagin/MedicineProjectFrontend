import React, { FC, useRef } from "react";
import css from "./InputLeft.module.css";
import { useStyles } from "../hooks/use-styles";

interface InputLeftProps {
  element: JSX.Element;
}

export const InputLeft: FC<InputLeftProps> = ({ element }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setInput } = useStyles();

  const handleOnLoad = () => {
    if (ref.current) {
      setInput(({ paddingRight }) => ({
        paddingRight,
        paddingLeft: ref.current?.getBoundingClientRect().width ?? 0,
      }));
    }
  };
  return (
    <div className={css.inputLeft} ref={ref} onLoad={handleOnLoad}>
      {element}
    </div>
  );
};
