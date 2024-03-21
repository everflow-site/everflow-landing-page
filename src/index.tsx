// @ts-nocheck
import React from "react";
import { createRoot } from 'react-dom/client';
import "regenerator-runtime/runtime";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = createRoot(document.getElementById("root")); 
root.render(<React.StrictMode>
  <Router>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.info))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
