import { Box, Flex, Image } from "@chakra-ui/react";
import { ChartProps } from "../../interfaces/interfaces";
import useChart from "../../hooks/useChart";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Chart({ type, titleChart, renderingTime }: ChartProps) {
  const { options, series, width } = useChart({
    type,
    titleChart,
    renderingTime,
  });
  return (
    <Box
      maxW={{
        base: "91.7vw",
        md: "87.5vw",
        lg: "27vw",
        xl: "31vw",
        "2xl": "35vw",
      }}
      w={{
        base: "91.7vw",
        md: "87.5vw",
        lg: "27vw",
        xl: "31vw",
        "2xl": "35vw",
      }}
      pt={1}
      px={3}
      borderRadius={5}
      overflowY={"hidden"}
      overflowX={"scroll"}
      bg={"gray.50"}
      color={"black"}
      sx={{
        "&::-webkit-scrollbar": {
          height: "5px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.01)`,
        },
        "&::-webkit-scrollbar-thumb": {
          height: "5px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
      }}
    >
      {!(series && series.length === 0) ? (
        <ApexCharts
          options={options}
          series={series}
          height={"216.5"}
          width={width}
          type={type === "temperature" ? "heatmap" : undefined}
        />
      ) : (
        <Image
          w={"100%"}
          h={"235px"}
          src="https://store.vtctelecom.com.vn/Content/images/no-data.png"
        />
      )}
    </Box>
  );
}
