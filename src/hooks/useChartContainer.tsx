import { useEffect, useState } from "react";
import { useChartFiltersContext } from "../providers/contexts/chartFiltersContext";
import { useAuthContext } from "../providers/contexts/authContext";
import { useProductContext } from "../providers/contexts/productContext";
import APIClient from "../services/api/rest/client";
import {
  QUERY_PRESENCE_CHART,
  QUERY_PRICE_CHART,
  QUERY_TEMPERATURE_CHART,
} from "../services/api/graphql/gql-interfaces";
import {
  presenceChartOptions,
  priceChartOptions,
  temperatureChartOptions,
} from "../config/chart";
import { ChartContainerProps } from "../interfaces/interfaces";

export default function useChartContainer({
  type,
  titleChart,
  renderingTime,
}: ChartContainerProps) {
  const [options, setOptions] = useState({} as ApexCharts.ApexOptions);
  const [width, setWidth] = useState(560);
  const [series, setSeries] = useState<
    ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
  >([] as ApexAxisChartSeries | ApexNonAxisChartSeries | undefined);
  const {
    filterMarketplacesID,
    filterFormOfPayment,
    filterPeriod,
    filterDataRange,
  } = useChartFiltersContext();
  const { authTokenCookie, logged } = useAuthContext();
  const { currentProductID, setRRPCurrentProduct } = useProductContext();

  const widthTemperatureChart = (array: any) => {
    let maiorComprimento = 0;

    for (let i = 0; i < array.length; i++) {
      const subArray = array[i].data;
      if (subArray.length > maiorComprimento) {
        maiorComprimento = subArray.length;
      }
    }

    setWidth(50 * maiorComprimento < 560 ? 560 : 50 * maiorComprimento);
    return maiorComprimento;
  };

  const getChartData = async () => {
    let auxOptions;
    const apiClient = new APIClient(authTokenCookie || "");
    const data = await apiClient.graphql_query({
      QUERY:
        type === "price"
          ? QUERY_PRICE_CHART
          : type === "temperature"
          ? QUERY_TEMPERATURE_CHART
          : QUERY_PRESENCE_CHART,
      variables: {
        dateRange: filterDataRange,
        formOfPayment: filterFormOfPayment,
        marketplaceIds: filterMarketplacesID,
        period: filterPeriod,
        productId: currentProductID,
        typeSeller: "BR",
      },
    });

    if (type === "price") {
      auxOptions = Object.assign({}, priceChartOptions);
      if (data.dashPriceChart.labels.length > 0) {
        setWidth(
          50 * data.dashPriceChart.labels.length < 560
            ? 560
            : 50 * data.dashPriceChart.labels.length
        );
        //@ts-ignore
        auxOptions.chart.toolbar.offsetX =
          50 * data.dashPriceChart.labels.length < 560
            ? 60 - 560
            : 60 - 50 * data.dashPriceChart.labels.length;
      }
      //@ts-ignore
      auxOptions.xaxis.categories = data.dashPriceChart.labels;
      //@ts-ignore
      auxOptions.title.text = titleChart;
      //@ts-ignore
      auxOptions.subtitle.text =
        filterFormOfPayment === "spot_price"
          ? "Spot Price"
          : "Installment Price";
      setSeries(data.dashPriceChart.data);
      setOptions(auxOptions);
      if (data.dashPriceChart.data.length > 0) {
        setRRPCorrentProduct(data.dashPriceChart.data[1].data);
      }
    } else if (type === "temperature") {
      auxOptions = Object.assign({}, temperatureChartOptions);
      if (data.dashTemperatureTable.series.length > 0) {
        //@ts-ignore
        auxOptions.chart.toolbar.offsetX =
          50 * widthTemperatureChart(data.dashTemperatureTable.series) > 560
            ? 60 - 50 * widthTemperatureChart(data.dashTemperatureTable.series)
            : 60 - 560;
      }
      //@ts-ignore
      auxOptions.subtitle.text =
        filterFormOfPayment === "spot_price"
          ? "Spot Price"
          : "Installment Price";
      //@ts-ignore
      auxOptions.title.text = titleChart;
      setSeries(data.dashTemperatureTable.series);
      setOptions(auxOptions);
    } else if (type === "presence") {
      auxOptions = Object.assign({}, presenceChartOptions);
      if (data.dashPresenceBar.labels.length > 0) {
        setWidth(
          50 * data.dashPresenceBar.labels.length < 560
            ? 560
            : 50 * data.dashPresenceBar.labels.length
        );
        //@ts-ignore
        auxOptions.chart.toolbar.offsetX =
          50 * data.dashPresenceBar.labels.length < 560
            ? 60 - 560
            : 60 - 50 * data.dashPresenceBar.labels.length;
      }
      //@ts-ignore
      auxOptions.xaxis.categories = data.dashPresenceBar.labels;
      //@ts-ignore
      auxOptions.title.text = titleChart;
      //@ts-ignore
      auxOptions.subtitle.text =
        filterFormOfPayment === "spot_price"
          ? "Spot Price"
          : "Installment Price";
      setOptions(auxOptions);
      setSeries(data.dashPresenceBar.data);
    }
  };

  useEffect(() => {
    if (logged) {
      setOptions({} as ApexCharts.ApexOptions);
      setTimeout(getChartData, renderingTime);
    }
  }, [
    filterMarketplacesID,
    filterFormOfPayment,
    filterPeriod,
    filterDataRange,
    logged,
    currentProductID,
  ]);

  const setRRPCorrentProduct = (arrayRRPValues: number[]) => {
    var maxRRPValue = arrayRRPValues.reduce((a, b) => {
      return Math.max(a, b);
    }, 0);
    setRRPCurrentProduct(maxRRPValue);
  };

  return { options, width, series };
}
