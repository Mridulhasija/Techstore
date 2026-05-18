import { createContext, useContext, useState, useEffect } from "react";
import { loginAPI, register as registerAPI } from "../api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("ts_user");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { /* ignore */ }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await loginAPI(email, password);
    localStorage.setItem("ts_token", data.token);
    localStorage.setItem("ts_user",  JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  };

  const register = async (name, email, password) => {
    const { data } = await registerAPI(name, email, password);
    localStorage.setItem("ts_token", data.token);
    localStorage.setItem("ts_user",  JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem("ts_token");
    localStorage.removeItem("ts_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
