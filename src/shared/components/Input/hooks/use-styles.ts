import { useContext } from "react";
import { StylesContext } from "../context/styles-context";

export const useStyles = () => useContext(StylesContext)