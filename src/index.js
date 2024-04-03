import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </div>
  );