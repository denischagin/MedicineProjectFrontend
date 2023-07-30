import { ViewerProvider } from "entites/viewer";

export const withViewer = (component: () => React.ReactNode) => () =>
  <ViewerProvider>{component()}</ViewerProvider>;
