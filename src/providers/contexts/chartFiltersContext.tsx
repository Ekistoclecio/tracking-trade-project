import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import { Marketplace } from "../../interfaces/interfaces";
import APIClient from "../../services/api/rest/client";
import { QUERY_MARKETPLACES } from "../../services/api/graphql/gql-interfaces";

interface ChartFiltersContext {
  arrayMarketplaces: Marketplace[];
  filterMarketplacesID: string[];
  filterFormOfPayment: string;
  filterPeriod: string;
  filterDataRange: string;
  setFilterDataRange: (val: any) => void;
  setFilterPeriod: (val: any) => void;
  setFilterFormOfPayment: (val: any) => void;
  setArrayMarketplaces: (val: any) => void;
  setFilterMarketplacesID: (val: any) => void;
}

const chartFiltersContext = createContext<ChartFiltersContext>(
  {} as ChartFiltersContext
);

const Provider = chartFiltersContext.Provider;

export const ChartFiltersProvider = (props: any) => {
  const { logged, authTokenCookie } = useAuthContext();
  const [arrayMarketplaces, setArrayMarketplaces] = useState<Marketplace[]>(
    [] as Marketplace[]
  );
  const [filterMarketplacesID, setFilterMarketplacesID] = useState<string[]>(
    [] as string[]
  );
  const [filterFormOfPayment, setFilterFormOfPayment] = useState("spot_price");
  const [filterPeriod, setFilterPeriod] = useState("hourly");
  const [filterDataRange, setFilterDataRange] = useState("");

  const getAllMarketplaces = async () => {
    const apiClient = new APIClient(authTokenCookie || "");
    let tempArrayMarketplaces = [] as Marketplace[];
    for (let i = 1; ; i++) {
      let data = await apiClient.graphql_query({
        QUERY: QUERY_MARKETPLACES,
        variables: { page: i },
      });
      if (data.marketplaces.length > 0) {
        tempArrayMarketplaces = tempArrayMarketplaces.concat(data.marketplaces);
        setArrayMarketplaces(tempArrayMarketplaces);
      } else {
        break;
      }
    }
  };

  useEffect(() => {
    if (logged) {
      getAllMarketplaces();
    }
  }, [logged]);

  return (
    <Provider
      value={{
        arrayMarketplaces,
        filterMarketplacesID,
        filterFormOfPayment,
        filterPeriod,
        filterDataRange,
        setFilterDataRange,
        setFilterPeriod,
        setFilterFormOfPayment,
        setArrayMarketplaces,
        setFilterMarketplacesID,
      }}
    >
      {props.children}
    </Provider>
  );
};

export const useChartFiltersContext = () => useContext(chartFiltersContext);
