import { useEffect, useState } from "react";
import { useAuthContext } from "../providers/contexts/authContext";
import { useProductContext } from "../providers/contexts/productContext";
import { ProductData } from "../interfaces/interfaces";

export default function useTopBar() {
  const [userName, setFirstUserName] = useState("Ekistoclecio Lima");
  const [initialsUserName, setInitialsUserName] = useState("");
  const { setLogged, setAuthTokenCookie } = useAuthContext();
  const { productsArray, setCurrentProductID } = useProductContext();
  const [searchProductValue, setSearchProductValue] = useState("");
  const [localArrayProducts, setLocalArrayProducts] = useState<ProductData[]>(
    [] as ProductData[]
  );

  useEffect(() => {
    if (document) {
      let inputSearch = document.getElementById("inputSearch");
      let dropdownSearch = document.getElementById("dropdownSearch");
      inputSearch?.addEventListener("focus", function () {
        dropdownSearch?.classList.add("d-block");
      });
      inputSearch?.addEventListener("blur", function () {
        setTimeout(function () {
          dropdownSearch?.classList.remove("d-block");
        }, 200);
      });
    }
    setInitialsUserName(() => {
      let aux = userName.trim();
      let secondName = aux.split(" ");
      return aux[0] + (aux.indexOf(" ") > -1 ? secondName[1][0] : "");
    });
  });

  useEffect(() => {
    if (searchProductValue.length > 0) {
      setLocalArrayProducts(
        productsArray.filter(
          (val) =>
            val.name.substring(0, searchProductValue.length) ===
              searchProductValue.toUpperCase() ||
            val.brand.name.substring(0, searchProductValue.length) ===
              searchProductValue.toUpperCase()
        )
      );
    } else {
      setLocalArrayProducts(productsArray);
    }
  }, [productsArray, searchProductValue]);

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const logout = () => {
    setLogged(false);
    window.localStorage.removeItem("LOGGED");
    setAuthTokenCookie("");
    window.localStorage.removeItem("AUTH_SESSION_TOKEN");
    window.location.reload();
  };

  const setProduct = (e: any) => {
    const element = e.target as HTMLElement;
    const id = element.closest(".dropdown-item")?.id;
    setSearchProductValue("");
    setCurrentProductID(id);
  };

  return {
    userName,
    initialsUserName,
    localArrayProducts,
    searchProductValue,
    setInitialsUserName,
    setSearchProductValue,
    setFirstUserName,
    setLocalArrayProducts,
    setProduct,
    logout,
    toggleFullScreen,
  };
}
