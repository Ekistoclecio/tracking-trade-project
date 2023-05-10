import { useEffect, useState } from "react";
import { useChartFiltersContext } from "../providers/contexts/chartFiltersContext";

export default function useChartFilterBar() {
  const [date, setDate] = useState(new Date());
  const {
    filterMarketplacesID,
    filterPeriod,
    filterFormOfPayment,
    setFilterDataRange,
    setFilterFormOfPayment,
    setFilterPeriod,
  } = useChartFiltersContext();

  const formatDateToString = () => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;
  };

  useEffect(() => {
    setFilterDataRange(() => formatDateToString());
  }, [date]);

  return {
    filterMarketplacesID,
    filterPeriod,
    filterFormOfPayment,
    date,
    setFilterDataRange,
    setFilterFormOfPayment,
    setFilterPeriod,
    setDate,
  };
}
