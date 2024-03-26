import * as React from "react";
import * as ReactDOM from 'react-dom';

import App from "../components/App";

ReactDOM.render(
  <React.StrictMode>
    <App message="Hello" />
  </React.StrictMode>,
  document.getElementById("app")
)
