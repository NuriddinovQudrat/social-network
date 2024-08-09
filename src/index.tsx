import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loader from "components/loader";
import CustomConfigProvider from "hocs/custom-config-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CustomConfigProvider>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Suspense>
    </CustomConfigProvider>
  );
});

reportWebVitals();
