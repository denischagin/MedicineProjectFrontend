import React, { FC, ReactNode, useState } from "react";
import { InputStyles, StylesContext } from "./styles-context";

interface StylesProviderProps {
  children: ReactNode;
}

export const StylesProvider: FC<StylesProviderProps> = ({ children }) => {
  const [input, setInput] = useState<InputStyles>({
    paddingLeft: 7,
    paddingRight: 7,
  });

  return (
    <StylesContext.Provider value={{ input, setInput }}>
      {children}
    </StylesContext.Provider>
  );
};
