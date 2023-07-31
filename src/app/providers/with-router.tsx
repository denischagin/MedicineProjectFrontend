import { BrowserRouter } from "react-router-dom";
import { PageLoader } from "shared/components/PageLoader";

export const withRouter = (component: () => React.ReactNode) => () =>
  <BrowserRouter>{component()}</BrowserRouter>;
