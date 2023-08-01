import { FC, useRef } from "react";
import css from "./InputRight.module.css";
import { useStyles } from "../hooks/use-styles";

interface InputRightProps {
  element: JSX.Element;
}

export const InputRight: FC<InputRightProps> = ({ element }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setInput } = useStyles();

  const handleOnLoad = () => {
    if (ref.current) {
      setInput(({ paddingLeft }) => ({
        paddingRight: ref.current?.getBoundingClientRect().width ?? 0,
        paddingLeft,
      }));
    }
  };

  return (
    <div className={css.inputRight} ref={ref} onLoad={handleOnLoad}>
      {element}
    </div>
  );
};
