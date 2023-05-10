import { ChangeEvent, useState } from "react";
import { useAuthContext } from "../providers/contexts/authContext";
import APIClient from "../services/api/rest/client";
import { useToast } from "@chakra-ui/react";

export default function useLoginScreen() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const toast = useToast();

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
      toast.closeAll();
      toast({
        title: "Login failed.",
        description: "Please verify your details and try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return {
    showPassword,
    setShowPassword,
    handleShowPassword,
    formState,
    setFormState,
    resetForm,
    login,
    onChangeInputs,
  };
}
