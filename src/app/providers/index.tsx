import compose from "compose-function";
import { withQuery } from "./with-query";
import { withRouter } from "./with-router";
import { withViewer } from "./with-viewer";

export const withProviders = compose(withRouter, withQuery, withViewer);
