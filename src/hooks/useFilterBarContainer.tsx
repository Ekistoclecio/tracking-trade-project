import { useEffect, useState } from "react";
import { useChartFiltersContext } from "../providers/contexts/chartFiltersContext";

export default function useFilterBarContainer() {
  const [showfilterMarketplaceModal, setShowFilterMarketplaceModal] =
    useState(false);
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
    showfilterMarketplaceModal,
    filterMarketplacesID,
    filterPeriod,
    filterFormOfPayment,
    date,
    setShowFilterMarketplaceModal,
    setFilterDataRange,
    setFilterFormOfPayment,
    setFilterPeriod,
    setDate,
  };
}
