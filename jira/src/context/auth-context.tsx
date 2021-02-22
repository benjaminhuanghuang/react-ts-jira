import React, { useState, ReactNode } from "react";
import * as auth from "../auth-provider";
import { User } from "../screens/ProjectList/SearchPanel";
import { useMount } from "../utils";
import { http } from "../utils/http";

interface AuthForm {
  username: string;
  password: string;
}

// load token from localStorage
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => {
    // then((user)=>setUser(user))   point free
    return auth.login(form).then(setUser);
  };
  const register = (form: AuthForm) => {
    // then((user)=>setUser(user))   point free
    return auth.register(form).then(setUser);
  };
  const logout = () => {
    return auth.logout().then(() => setUser(null));
  };
  useMount(()=>{
    bootstrapUser().then(setUser);
  })
  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth need AuthProvider");
  }
  return context;
};
