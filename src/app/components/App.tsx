import { withProviders } from "app/providers";
import { Routing } from "../routes";
import "../styles/base.scss"

export const App = withProviders(() => {
  return <Routing />;
});

