import { ChangeEvent, useState } from "react";
import { useAuthContext } from "../providers/contexts/authContext";
import APIClient from "../services/api/rest/client";

export default function useLoginScreen() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { authTokenCookie, setLogged, setAuthTokenCookie } = useAuthContext();

  function resetForm() {
    setFormState({
      email: "",
      password: "",
    });
  }

  async function login() {
    const apiClient = new APIClient(authTokenCookie || "");
    const { logged, cookie } = await apiClient.login(formState);
    if (logged) {
      setLogged(logged);
      setAuthTokenCookie(cookie);
      window.localStorage.setItem("LOGGED", logged);
      window.localStorage.setItem(
        "AUTH_SESSION_TOKEN",
        cookie[0].split(";")[0]
      );
      resetForm();
    } else {
      alert("Login failed, please verify your details and try again.");
    }
  }

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return {
    formState,
    setFormState,
    resetForm,
    login,
    onChangeInputs,
  };
}
