export interface IViewerContext {
  currentViewer: IViewer | null;
  setCurrentViewer: (user: IViewer | null) => void;
  isLoading: boolean
}

export interface IViewer {
  username: string;
  email: string;
  role: string;
}

export interface ITokens {
  accessToken: string,
  refreshToken: string,
}