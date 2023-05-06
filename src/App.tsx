import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./assets/styles/app.scss";
import { Provider } from "react-redux";
import { setupInterceptor } from "./services/request";
import store from "./store/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./admin/theme";
import { StyledChart } from "./admin/components/chart";
import ScrollToTop from "./admin/components/scroll-to-top/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

setupInterceptor(store);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Router />
          </ThemeProvider>
        </HelmetProvider>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
