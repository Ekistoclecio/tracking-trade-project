import CustomDatePicker from "../Datepicker";
import { Tooltip } from "../Tooltips";
import img from "../../assets/imagens/no-data.png";

import useMarketplaceListContainer from "../../hooks/useMarketplaceListContainer";

export default function MarketplaceListContainer() {
  const { date, priceType, dataMarketplaceList, setPriceType, setDate } =
    useMarketplaceListContainer();
  return (
    <div className="bg-light rounded" style={{ minHeight: "576px" }}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <span className="d-flex me-2">
          <span className="fw-bold">Offer</span>
          <Tooltip text="Tooltip">
            <i className="bi bi-question-circle ms-2"></i>
          </Tooltip>
        </span>
        <div className="d-flex gap-3">
          <div
            className="d-flex flex-column flex-fill"
            style={{ minWidth: "max-contente" }}
          >
            <p className="mb-1">Date</p>
            <CustomDatePicker date={date} setDate={setDate} />
          </div>
          <div>
            <p className="mb-1">Price</p>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {priceType === "mode"
                  ? "Mode"
                  : priceType === "minimum"
                  ? "Minimum"
                  : "Maximum"}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => setPriceType("mode")}
                  >
                    Mode
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => setPriceType("minimum")}
                  >
                    Minimum
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => setPriceType("maximum")}
                  >
                    Maximum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex overflow-auto rounded-end mb-1"
        style={{ maxHeight: "475px" }}
      >
        <table
          className="table m-0 p-0 overflow-auto rounded-end"
          style={{ fontSize: "14px" }}
        >
          <thead className="p-0">
            <tr className="d-flex">
              <th className="p-0" scope="col" style={{ width: "30%" }}>
                Marketplace
              </th>
              <th
                className="text-center p-0"
                scope="col"
                style={{ width: "15%" }}
              >
                Presence
              </th>
              <th
                className="text-center p-0"
                scope="col"
                style={{ width: "11%" }}
              >
                SP (R$)
              </th>
              <th
                className="text-center p-0"
                scope="col"
                style={{ width: "11%" }}
              >
                %RRP
              </th>
              <th
                className="text-center p-0"
                scope="col"
                style={{ width: "11%" }}
              >
                IP (R$)
              </th>
              <th
                className="text-center p-0"
                scope="col"
                style={{ width: "11%" }}
              >
                %RRP
              </th>
              <th
                className="text-center p-0"
                scope="col"
                style={{ width: "11%" }}
              >
                View
              </th>
            </tr>
          </thead>
          <tbody className="p-0">
            {dataMarketplaceList.length > 0 ? (
              dataMarketplaceList.map((item) => (
                <tr className="d-flex" key={item.id}>
                  <td className="p-1 my-1" style={{ width: "30%" }}>
                    {item.name}
                  </td>
                  <td className="p-1 my-1 text-center" style={{ width: "15%" }}>
                    {item.shareCustumer + "%"}
                  </td>
                  <td className="p-1 my-1 text-center" style={{ width: "11%" }}>
                    {item.spot_price}
                  </td>
                  <td
                    className="p-1 my-1 text-center rounded"
                    style={{
                      width: "11%",
                      background: `rgb(248,${
                        249 - 2 * Math.abs(item.spot_rrp)
                      },${250 - 2 * Math.abs(item.spot_rrp)})`,
                    }}
                  >
                    {Math.abs(item.spot_rrp) + "%"}
                  </td>
                  <td className="p-1 my-1 text-center" style={{ width: "11%" }}>
                    {item.instalment_price}
                  </td>
                  <td
                    className="p-1 my-1 text-center rounded"
                    style={{
                      width: "11%",
                      background: `rgb(248,${
                        249 - 2 * Math.abs(item.instalment_rrp)
                      },${250 - 2 * Math.abs(item.instalment_rrp)})`,
                    }}
                  >
                    {Math.abs(item.instalment_rrp) + "%"}
                  </td>
                  <td className="p-1 my-1 text-center" style={{ width: "11%" }}>
                    {item.url != null ? (
                      <a
                        href={item.url}
                        target="_blank"
                        className="text-secondary"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    ) : (
                      <i className="bi bi-slash-circle text-secondary"></i>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td>
                    <img
                      src="https://store.vtctelecom.com.vn/Content/images/no-data.png"
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "75px",
                      }}
                    />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
