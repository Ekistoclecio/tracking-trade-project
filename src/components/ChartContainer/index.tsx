import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ChartContainerProps } from "../../interfaces/interfaces";
import useChartContainer from "../../hooks/useChartContainer";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartContainer({
  type,
  titleChart,
  renderingTime,
}: ChartContainerProps) {
  const { options, series, width } = useChartContainer({
    type,
    titleChart,
    renderingTime,
  });

  return (
    <div className="mx-3" style={{ overflowY: "hidden" }}>
      {series && series.length === 0 ? (
        <div
          className="d-flex flex-column align-items-center pt-2"
          style={{ width: "100%", height: "200px" }}
        >
          <img
            src="https://store.vtctelecom.com.vn/Content/images/no-data.png"
            style={{ width: "80%", height: "190px" }}
            className="mt-3"
          />
        </div>
      ) : (
        <ApexCharts
          options={options}
          series={series}
          height={"210"}
          width={width}
          type={type === "temperature" ? "heatmap" : undefined}
        />
      )}
    </div>
  );
}
