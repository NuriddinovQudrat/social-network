import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Loader from "components/loader";
import { ReactQueryProvider } from "hocs/react-query";

import "./index.css";
import "antd/dist/reset.css";
import CustomConfigProvider from "hocs/custom-config-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <CustomConfigProvider>
    <Suspense fallback={<Loader />}>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </Suspense>
  </CustomConfigProvider>
);

reportWebVitals();
