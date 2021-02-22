import { useState } from "react";
//
import RegisterScreen from "./register";
import LoginScreen from "./login";

export const UnauthApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return <div>{isRegister ? <RegisterScreen /> : <LoginScreen />}
  <button onClick={()=>setIsRegister(!isRegister)}>Switch to {isRegister? "Login" :"RegisterÍ"}</button>
  </div>;
};
