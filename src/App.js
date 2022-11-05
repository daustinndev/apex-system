import logo from "./logo.svg";
import "./App.css";

import RouterApp from "./router/router";
import { useEffect } from "react";
import { useAuth } from "./context/authContext";
function App() {
  const { user, getUserDetail } = useAuth();
  useEffect(() => {
    user && getUserDetail();
  }, []);
  return (
    <div className="App">
      <RouterApp />
    </div>
  );
}

export default App;
