import { useEffect, useState } from "react";
import { DataListMarketplace } from "../interfaces/interfaces";
import { useProductContext } from "../providers/contexts/productContext";
import { useAuthContext } from "../providers/contexts/authContext";
import APIClient from "../services/api/rest/client";
import { QUERY_MARKETPLACES_LIST } from "../services/api/graphql/gql-interfaces";

export default function useMarketplaceListContainer() {
  const [date, setDate] = useState(new Date());
  const [priceType, setPriceType] = useState("mode");
  const [dataMarketplaceList, setDataMarketplaceLista] = useState<
    DataListMarketplace[]
  >([] as DataListMarketplace[]);

  const { currentProductID } = useProductContext();
  const { authTokenCookie } = useAuthContext();

  const formatDateToString = () => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;
  };

  const getMarketplaceList = async () => {
    const apiClient = new APIClient(authTokenCookie || "");
    const data = await apiClient.graphql_query({
      QUERY: QUERY_MARKETPLACES_LIST,
      variables: {
        productId: currentProductID,
        date: formatDateToString(),
        priceType: priceType,
        typeSeller: "BR",
      },
    });
    setDataMarketplaceLista(() => data.dashMarketplaceList);
  };

  useEffect(() => {
    if (currentProductID && currentProductID.length > 0) {
      getMarketplaceList();
    }
  }, [currentProductID, date, priceType]);

  return {
    date,
    priceType,
    dataMarketplaceList,
    setDataMarketplaceLista,
    setDate,
    setPriceType,
  };
}
