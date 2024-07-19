// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>
);
