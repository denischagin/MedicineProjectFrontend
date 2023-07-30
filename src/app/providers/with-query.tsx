import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export const withQuery = (component: () => React.ReactNode) => () =>
  <QueryClientProvider client={client}>{component()}</QueryClientProvider>;
