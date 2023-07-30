import React, { useEffect, useState } from "react";
import { ViewerContext, IViewerContext, IViewer } from "./context";

interface ViewerProviderProps {
  children: React.ReactNode;
}

interface VariablesMutation {
  accessToken: string;
  refreshToken: string;
}

export const ViewerProvider: React.FC<ViewerProviderProps> = ({ children }) => {
  const [currentViewer, setCurrentViewer] = useState<IViewer | null>(null);

  useEffect(() => {
    const currentViewer = localStorage.getItem("currentViewer");
    try {
      if (currentViewer) setCurrentViewer(JSON.parse(currentViewer));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const viewerContextValue: IViewerContext = {
    currentViewer,
    setCurrentViewer,
  };

  return (
    <ViewerContext.Provider value={viewerContextValue}>
      {children}
    </ViewerContext.Provider>
  );
};
