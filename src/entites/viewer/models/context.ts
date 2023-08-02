import { createContext } from "react";
import { IViewerContext } from "../types";

export const ViewerContext = createContext<IViewerContext>({
  currentViewer: null,
  setCurrentViewer: () => {},
  isLoading: false
});
