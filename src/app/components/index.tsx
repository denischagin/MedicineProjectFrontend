import { Routing } from "app/routes";
import { withProviders } from "app/providers";
import "app/styles/global.css";
import "app/styles/fonts.css";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
