import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Loader from "components/loader";
import { ReactQueryProvider } from "hocs/react-query";
import CustomConfigProvider from "hocs/custom-config-provider";
import "./index.css";
import "antd/dist/reset.css";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CustomConfigProvider>
      <Suspense fallback={<Loader />}>
        <ReactQueryProvider>
          <App />
        </ReactQueryProvider>
      </Suspense>
    </CustomConfigProvider>
  );
});

reportWebVitals();
