import Style from "./index.module.scss";
import ProductContainer from "../ProductContainer";
import FilterBarContainer from "../FilterBarContainer";
import MarketplaceListContainer from "../MarketplaceListContainer";
import ChartContainer from "../ChartContainer";

export default function Dashboad() {
  return (
    <div
      className={`container-fluid flex-grow-1 m-0 p-3 d-flex flex-column flex-xl-row gap-3 ${Style.bgColorGray200}`}
    >
      <div className={`d-flex flex-column gap-3 col-xl-4`}>
        <ProductContainer />
        <MarketplaceListContainer />
      </div>
      <div className="d-flex flex-column col-xl-8 gap-3">
        <FilterBarContainer />
        <div className="d-flex flex-column gap-3 me-3 h-100">
          <div
            className="d-flex flex-column flex-xl-row gap-3 me-0 me-xl-3"
            style={{ height: "33%" }}
          >
            <div
              className={`bg-light rounded ${Style.max_lg_Width}`}
              style={{ maxWidth: "100%" }}
            >
              <ChartContainer
                type="price"
                titleChart="Price"
                renderingTime={200}
              />
            </div>
            <div
              className={`bg-light rounded ${Style.max_lg_Width}`}
              style={{ maxWidth: "100%" }}
            >
              <ChartContainer
                type="price"
                titleChart="Price P2P"
                renderingTime={400}
              />
            </div>
          </div>
          <div
            className="d-flex flex-column flex-xl-row gap-3 me-0 me-xl-3"
            style={{ height: "33%" }}
          >
            <div
              className={`bg-light rounded ${Style.max_lg_Width}`}
              style={{ maxWidth: "100%" }}
            >
              <ChartContainer
                type="temperature"
                titleChart="Temperature"
                renderingTime={600}
              />
            </div>
            <div
              className={`bg-light rounded ${Style.max_lg_Width}`}
              style={{ maxWidth: "100%" }}
            >
              <ChartContainer
                type="temperature"
                titleChart="Temperature P2P"
                renderingTime={800}
              />
            </div>
          </div>
          <div
            className="d-flex flex-column flex-xl-row gap-3 me-0 me-xl-3"
            style={{ height: "33%" }}
          >
            <div
              className={`bg-light rounded ${Style.max_lg_Width}`}
              style={{ maxWidth: "100%" }}
            >
              <ChartContainer
                type="presence"
                titleChart="Presence"
                renderingTime={1000}
              />
            </div>
            <div
              className={`bg-light rounded ${Style.max_lg_Width}`}
              style={{ maxWidth: "100%" }}
            >
              <ChartContainer
                type="presence"
                titleChart="Presence P2P"
                renderingTime={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
