import { createContext, useContext, useEffect, useState } from "react";
import { ProductData } from "../../interfaces/interfaces";
import { useAuthContext } from "./authContext";
import APIClient from "../../services/api/rest/client";
import { QUERY_ALL_PRODUCTS } from "../../services/api/graphql/gql-interfaces";

interface ProductContext {
  currentProductID: string;
  productsArray: ProductData[];
  RRPCurrentProduct: number;
  setCurrentProductID: (val: any) => void;
  setProductsArray: (val: any) => void;
  setRRPCurrentProduct: (val: any) => void;
}

const productContext = createContext<ProductContext>({} as ProductContext);

const Provider = productContext.Provider;

export const ProductProvider = (props: any) => {
  const { logged, authTokenCookie } = useAuthContext();
  const [currentProductID, setCurrentProductID] = useState("");
  const [RRPCurrentProduct, setRRPCurrentProduct] = useState(0);
  const [productsArray, setProductsArray] = useState<ProductData[]>(
    [] as ProductData[]
  );

  const getAllProducts = async () => {
    const apiClient = new APIClient(authTokenCookie || "");
    let ArrayProducts = [] as ProductData[];
    let setFirstProductID = false;
    for (let i = 1; ; i++) {
      let data = await apiClient.graphql_query({
        QUERY: QUERY_ALL_PRODUCTS,
        variables: { page: i },
      });
      if (data.products.length > 0) {
        ArrayProducts = ArrayProducts.concat(data.products);
        setProductsArray(ArrayProducts);
        if (!setFirstProductID) {
          setCurrentProductID(() => data.products[0].id);
          setFirstProductID = true;
        }
      } else {
        break;
      }
    }
  };

  useEffect(() => {
    if (logged) {
      getAllProducts();
    }
  }, [logged]);

  return (
    <Provider
      value={{
        currentProductID,
        productsArray,
        setCurrentProductID,
        setProductsArray,
        RRPCurrentProduct,
        setRRPCurrentProduct,
      }}
    >
      {props.children}
    </Provider>
  );
};

export const useProductContext = () => useContext(productContext);
