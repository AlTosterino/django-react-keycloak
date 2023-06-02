import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthenticationService from "./AuthenticationService.jsx";

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

AuthenticationService.initKeycloak(renderApp);
