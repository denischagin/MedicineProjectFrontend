import { Dispatch, createContext } from "react";

export type InputStyles = {
  paddingRight: number;
  paddingLeft: number;
};

export interface IStylesContext {
  input: InputStyles;
  setInput: Dispatch<React.SetStateAction<InputStyles>>;
}

export const StylesContext = createContext<IStylesContext>({
  input: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  setInput: () => {},
});
