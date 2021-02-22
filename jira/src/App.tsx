import React from "react";
import "./App.css";
import { useAuth } from "./context/auth-context";
//
import { ProjectListScreen } from "./screens/ProjectList";
import { UnauthApp } from "./unauth-app";

function App() {
  const { user } = useAuth();

  return <div className="App">{user ? < AuthedApp/> : <UnauthApp />}</div>;
}

export default App;
