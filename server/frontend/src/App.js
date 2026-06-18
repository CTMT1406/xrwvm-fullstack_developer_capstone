import React from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const path = window.location.pathname;

  if (path.includes("register")) {
    return <Register />;
  }

  if (path.includes("login")) {
    return <Login />;
  }

  return <Login />;
}

export default App;