import React, { useEffect, useState } from "react";
import { ViewerContext } from "./context";
import { useRefresh } from "../libs/hooks/refresh";
import { TokenLocalStorage } from "shared/libs";
import { IViewer, IViewerContext } from "../types";

interface ViewerProviderProps {
  children: React.ReactNode;
}

export const ViewerProvider: React.FC<ViewerProviderProps> = ({ children }) => {
  const [currentViewer, setCurrentViewer] = useState<IViewer | null>(null);

  const { mutate: refreshMutate } = useRefresh();

  const accessToken = TokenLocalStorage.getAccessToken() ?? "";
  const refreshToken = TokenLocalStorage.getRefreshToken() ?? "";

  useEffect(() => {
    refreshMutate({accessToken, refreshToken}, {
      onSuccess: ({ accessToken = "", refreshToken = "" }) => {
        setAuth();
        setTokens(accessToken, refreshToken);
      },
      onError: () => {
        setCurrentViewer(null)
        localStorage.removeItem("currentViewer")
      }
    });
  }, []);

  const setAuth = () => {
    const currentViewer = localStorage.getItem("currentViewer");
    try {
      if (currentViewer) setCurrentViewer(JSON.parse(currentViewer));
    } catch (e) {
      console.log(e);
    }
  };

  const setTokens = (access: string, refresh: string) => {
    TokenLocalStorage.setAccessToken(access);
    TokenLocalStorage.setRefreshToken(refresh);
  };

  const viewerContextValue: IViewerContext = {
    currentViewer,
    setCurrentViewer,
    isLoading: false
  };

  return (
    <ViewerContext.Provider value={viewerContextValue}>
      {children}
    </ViewerContext.Provider>
  );
};
