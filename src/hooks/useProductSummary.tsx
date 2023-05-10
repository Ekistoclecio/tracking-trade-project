import { useEffect, useState } from "react";
import { useAuthContext } from "../providers/contexts/authContext";
import { useProductContext } from "../providers/contexts/productContext";
import { ProductData } from "../interfaces/interfaces";
import APIClient from "../services/api/rest/client";
import { QUERY_PRODUCT } from "../services/api/graphql/gql-interfaces";

export default function useProductSummary() {
  const { authTokenCookie } = useAuthContext();
  const { currentProductID } = useProductContext();
  const [productData, setProductData] = useState<ProductData>(
    {} as ProductData
  );
  const [currentDate, setCurrentDate] = useState<string>();

  function getCurrentDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  const getProductData = async () => {
    const apiClient = new APIClient(authTokenCookie || "");
    const data = await apiClient.graphql_query({
      QUERY: QUERY_PRODUCT,
      variables: { productId: currentProductID },
    });
    setProductData(data.product);
    setCurrentDate(getCurrentDateTime);
  };

  useEffect(() => {
    if (currentProductID && currentProductID.length > 0) {
      getProductData();
    }
  }, [currentProductID]);

  return { productData, currentDate, setProductData, setCurrentDate };
}
