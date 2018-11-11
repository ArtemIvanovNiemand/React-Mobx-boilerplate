import React, { Fragment } from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import App from "src/app";

render(
  <Fragment>
    <DevTools />
    <App />
  </Fragment>,
  document.getElementById("root")
);
