import { useContext } from "react";
import { ViewerContext } from "./context";

export const useViewer = () => {
  const viewer = useContext(ViewerContext);
  return viewer;
};
