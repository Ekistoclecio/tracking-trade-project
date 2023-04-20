import FilterMarketplaceModal from "../FilterMarketplaceModal";
import CustomDatePicker from "../Datepicker";
import useFilterBarContainer from "../../hooks/useFilterBarContainer";

export default function FilterBarContainer() {
  const {
    showfilterMarketplaceModal,
    filterMarketplacesID,
    filterPeriod,
    filterFormOfPayment,
    date,
    setShowFilterMarketplaceModal,
    setFilterFormOfPayment,
    setFilterPeriod,
    setDate,
  } = useFilterBarContainer();
  return (
    <div className="d-flex bg-light p-3 rounded gap-3 me-0 me-xl-3 flex-wrap">
      <FilterMarketplaceModal
        show={showfilterMarketplaceModal}
        closeModal={() => setShowFilterMarketplaceModal(false)}
      />
      <div className="d-flex flex-column flex-fill">
        <p className="mb-1">Period</p>
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn btn-primary ${
              filterPeriod === "hourly" ? "active" : ""
            }`}
            onClick={() => setFilterPeriod("hourly")}
          >
            Hour
          </button>
          <button
            type="button"
            className={`btn btn-primary ${
              filterPeriod === "daily" ? "active" : ""
            }`}
            onClick={() => setFilterPeriod("daily")}
          >
            Day
          </button>
          <button
            type="button"
            className={`btn btn-primary ${
              filterPeriod === "weekly" ? "active" : ""
            }`}
            onClick={() => setFilterPeriod("weekly")}
          >
            Week
          </button>
        </div>
      </div>
      <div className="d-flex flex-column flex-fill">
        <p className="mb-1">Date</p>
        <CustomDatePicker date={date} setDate={setDate} />
      </div>
      <div className="d-flex flex-column flex-fill">
        <p className="mb-1">Form of payment</p>
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn btn-primary px-4 ${
              filterFormOfPayment === "spot_price" ? "active" : ""
            }`}
            style={{ minWidth: "max-content" }}
            onClick={() => setFilterFormOfPayment("spot_price")}
          >
            Spot Price
          </button>
          <button
            type="button"
            className={`btn btn-primary px-4 ${
              filterFormOfPayment === "installment_price" ? "active" : ""
            }`}
            style={{ minWidth: "max-content" }}
            onClick={() => setFilterFormOfPayment("installment_price")}
          >
            Installment Price
          </button>
        </div>
      </div>
      <div className="d-flex flex-column flex-fill">
        <p className="mb-1">Marketplaces</p>
        <button
          type="button"
          className="btn btn-primary px-4"
          style={{ minWidth: "max-content" }}
          onClick={() => setShowFilterMarketplaceModal(true)}
        >
          {filterMarketplacesID.length > 0
            ? `${filterMarketplacesID.length} Marketplaces`
            : "All Marketplaces"}
        </button>
      </div>
    </div>
  );
}
