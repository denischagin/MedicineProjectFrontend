import { createContext } from "react";

export interface IViewerContext {
  currentViewer: IViewer | null;
  setCurrentViewer: (user: IViewer | null) => void;
}

export interface IViewer {
  username: string;
  email: string;
  role: string;
}

export const ViewerContext = createContext<IViewerContext>({
  currentViewer: null,
  setCurrentViewer: () => {},
});
