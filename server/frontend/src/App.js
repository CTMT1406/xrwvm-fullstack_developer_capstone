import React from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";

function App() {
  const path = window.location.pathname;

  if (path.includes("register")) {
    return <Register />;
  }

  if (path.includes("login")) {
    return <Login />;
  }

  if (path.includes("postreview")) {
    return <PostReview />;
  }

  if (path.includes("dealers")) {
    return <Dealers />;
  }

  if (path.includes("dealer")) {
    return <Dealer />;
  }
  return <Login />;
}

export default App;