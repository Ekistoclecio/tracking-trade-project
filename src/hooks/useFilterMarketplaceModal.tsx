import { useEffect, useState } from "react";
import { Marketplace } from "../interfaces/interfaces";
import { useChartFiltersContext } from "../providers/contexts/chartFiltersContext";

export default function useFilterMarketplaceModal(closeModal: () => void) {
  const { arrayMarketplaces, filterMarketplacesID } = useChartFiltersContext();
  const [searchMarketplaceValue, setSearchMarketplaceValue] = useState("");
  const [localArrayMarketplaces, setLocalArrayMarketplaces] = useState<
    Marketplace[]
  >([] as Marketplace[]);
  const [localFilterMarketplacesID, setLocalFilterMarketplacesID] = useState<
    string[]
  >([] as string[]);

  useEffect(() => {
    if (searchMarketplaceValue.length > 0) {
      setLocalArrayMarketplaces(
        arrayMarketplaces.filter(
          (val) =>
            val.name.substring(0, searchMarketplaceValue.length) ===
            searchMarketplaceValue.toUpperCase()
        )
      );
    } else {
      setLocalArrayMarketplaces(arrayMarketplaces);
    }
  }, [arrayMarketplaces, searchMarketplaceValue]);

  useEffect(() => {
    setLocalFilterMarketplacesID(filterMarketplacesID);
  }, [filterMarketplacesID]);

  const clearAndCloseModal = () => {
    setLocalFilterMarketplacesID(filterMarketplacesID);
    setSearchMarketplaceValue("");
    closeModal();
  };

  const setFilterMarketplace = (e: any) => {
    const element = e.target as HTMLElement;
    const id = element.closest(".marketplace-item")?.id;
    if (id && localFilterMarketplacesID.indexOf(id) === -1) {
      setLocalFilterMarketplacesID(() => [...localFilterMarketplacesID, id]);
    } else if (id && localFilterMarketplacesID.indexOf(id) > -1) {
      let elementPosition = localFilterMarketplacesID.indexOf(id);
      setLocalFilterMarketplacesID(() => {
        let auxArray = [...localFilterMarketplacesID];
        auxArray.splice(elementPosition, 1);
        return auxArray;
      });
    }
  };

  return {
    searchMarketplaceValue,
    localArrayMarketplaces,
    localFilterMarketplacesID,
    setSearchMarketplaceValue,
    setLocalArrayMarketplaces,
    setLocalFilterMarketplacesID,
    clearAndCloseModal,
    setFilterMarketplace,
  };
}
