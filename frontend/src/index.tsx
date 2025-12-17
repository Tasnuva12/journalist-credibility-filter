import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import "./index.css";



const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>
);
