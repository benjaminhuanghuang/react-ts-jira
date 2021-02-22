import React, { useState } from "react";
//
import RegisterScreen from "./register";
import LoginScreen from "./login";
//
import { Card } from "antd";

export const UnauthApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <button onClick={() => setIsRegister(!isRegister)}>Switch to {isRegister ? "Login" : "RegisterÍ"}</button>
      </Card>
    </div>
  );
};
