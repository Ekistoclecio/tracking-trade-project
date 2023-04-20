import { Tooltip } from "../Tooltips";
import { useProductContext } from "../../providers/contexts/productContext";
import useProductContainer from "../../hooks/useProductContainer";

export default function ProductContainer() {
  const { RRPCurrentProduct } = useProductContext();
  const { productData, currentDate } = useProductContainer();

  return (
    <div className="d-flex flex-column">
      <div className="bg-primary rounded-top h-50" style={{ zIndex: 1 }}>
        <div className="text-white m-2 h-50">
          <div className="d-flex flex-column mb-3">
            <span className="fw-bold">
              {productData.name ? productData.name : "MODEL"}
            </span>
            <span style={{ fontSize: "12px" }}>
              {productData.brand && productData.brand.name
                ? productData.brand.name
                : "BRAND"}
            </span>
          </div>
          <div
            className="d-flex flex-column"
            style={{ maxWidth: "min-content" }}
          >
            <span style={{ fontSize: "12px" }}>
              {RRPCurrentProduct > 0
                ? `RRP: R$ ${
                    RRPCurrentProduct > 1000
                      ? RRPCurrentProduct / 1000
                      : RRPCurrentProduct
                  }`
                : "RRP: unknow"}
            </span>
            <img
              style={{ maxWidth: "100px", minHeight: "100px" }}
              className="img-fluid rounded"
              src={
                productData.pictureUrl
                  ? productData.pictureUrl
                  : "https://nitm.ac.in/htmls/images/defaultuser.jpg"
              }
            />
          </div>
        </div>
      </div>
      <div className="bg-light rounded-end d-flex flex-column align-items-end justify-content-between justify-content-xl-between h-50">
        <span>
          Ranking:
          {productData.lastRatingValue ? (
            <>
              <i
                className={`bi bi-star ${
                  productData.lastRatingValue >= 1
                    ? "text-warning"
                    : "text-primary"
                } ms-1`}
              ></i>
              <i
                className={`bi bi-star ${
                  productData.lastRatingValue >= 2
                    ? "text-warning"
                    : "text-primary"
                }`}
              ></i>
              <i
                className={`bi bi-star ${
                  productData.lastRatingValue >= 3
                    ? "text-warning"
                    : "text-primary"
                }`}
              ></i>
              <i
                className={`bi bi-star ${
                  productData.lastRatingValue >= 4
                    ? "text-warning"
                    : "text-primary"
                }`}
              ></i>
              <i
                className={`bi bi-star ${
                  productData.lastRatingValue >= 5
                    ? "text-warning"
                    : "text-primary"
                }`}
              ></i>
            </>
          ) : (
            <span> Unknown</span>
          )}
          <Tooltip text="Tooltip">
            <i className={`bi bi-question-circle position-relative mx-2`}></i>
          </Tooltip>
        </span>
        <span className="me-3 mb-3">
          Last scraping: <span>{currentDate}</span>
          {/* Exibe a hora da ultima atualização(requisição no servidor)*/}
        </span>
      </div>
    </div>
  );
}
