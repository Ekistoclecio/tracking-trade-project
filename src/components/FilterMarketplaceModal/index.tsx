import Modal from "react-bootstrap/Modal";
import Style from "./index.module.scss";
import { useChartFiltersContext } from "../../providers/contexts/chartFiltersContext";
import { FilterMarketplaceModalProps } from "../../interfaces/interfaces";
import useFilterMarketplaceModal from "../../hooks/useFilterMarketplaceModal";

export default function FilterMarketplaceModal({
  show,
  closeModal,
}: FilterMarketplaceModalProps) {
  const {
    searchMarketplaceValue,
    localArrayMarketplaces,
    localFilterMarketplacesID,
    setFilterMarketplace,
    clearAndCloseModal,
    setSearchMarketplaceValue,
  } = useFilterMarketplaceModal(closeModal);

  const { setFilterMarketplacesID } = useChartFiltersContext();

  return (
    <Modal
      show={show}
      onHide={clearAndCloseModal}
      dialogClassName={Style.maxWidth}
      fullscreen="md"
    >
      <Modal.Header style={{ fontSize: "14px" }} closeButton>
        <Modal.Title style={{ fontSize: "16px" }}>Marketplaces</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "70vh" }} className="overflow-auto">
        <table className="table">
          <tbody>
            <tr>
              <div
                className="input-group bg-white border border-2 rounded-pill p-0"
                style={{ height: "40px" }}
              >
                <span
                  className="btn bg-white border-0 rounded-pill"
                  style={{ cursor: "default" }}
                >
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className={`border-0 rounded-pill ${Style.inputSearch}`}
                  placeholder="Search..."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  id="inputSearch"
                  value={searchMarketplaceValue}
                  onChange={(e) => setSearchMarketplaceValue(e.target.value)}
                />
              </div>
            </tr>
            {localArrayMarketplaces.map((item) => (
              <tr
                className="d-flex align-items-center fw-bolder marketplace-item"
                key={item.id}
                id={item.id}
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  onChange={setFilterMarketplace}
                  checked={
                    localFilterMarketplacesID.indexOf(item.id) > -1
                      ? true
                      : false
                  }
                />
                <img
                  style={{ maxWidth: "60px", minHeight: "60px" }}
                  src={
                    item.pictureUrl
                      ? item.pictureUrl
                      : "https://nitm.ac.in/htmls/images/defaultuser.jpg"
                  }
                />
                {item.name}
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <button
          style={{ fontSize: "16px" }}
          className="btn btn-secondary"
          onClick={clearAndCloseModal}
        >
          Cancel
        </button>
        <button
          style={{ fontSize: "16px" }}
          className="btn btn-primary"
          onClick={() => {
            setFilterMarketplacesID(localFilterMarketplacesID);
            clearAndCloseModal();
          }}
        >
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
}
