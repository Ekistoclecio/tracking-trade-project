import { createContext, useContext, useEffect, useState } from "react";

interface AuthContext {
  logged: boolean;
  authTokenCookie: string;
  setLogged: (val: any) => void;
  setAuthTokenCookie: (val: any) => void;
}

const authContext = createContext<AuthContext>({} as AuthContext);

const Provider = authContext.Provider;

export const AuthProvider = (props: any) => {
  const [logged, setLogged] = useState(false);
  const [authTokenCookie, setAuthTokenCookie] = useState("");

  useEffect(() => {
    setLogged(window.localStorage.getItem("LOGGED") == "true" || false);
    setAuthTokenCookie(window.localStorage.getItem("AUTH_SESSION_TOKEN") || "");
  });

  return (
    <Provider
      value={{ logged, authTokenCookie, setLogged, setAuthTokenCookie }}
    >
      {props.children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
