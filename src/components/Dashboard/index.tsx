import { Box, Flex } from "@chakra-ui/react";

import ProductSummary from "../ProductSummary";
import ChartFilterBar from "../ChartFilterBar";
import MarketplaceTable from "../MarketplaceTable";
import Chart from "../Chart";

export default function Dashboard() {
  return (
    <Flex
      minH={"min-content"}
      gap={3}
      p={3}
      flexDirection={{ base: "column", lg: "row" }}
      m={0}
    >
      <Box minW={"min-content"} w={{ base: "100%", lg: "30%" }}>
        <ProductSummary />
        <MarketplaceTable />
      </Box>
      <Box w={{ base: "100%", lg: "70%" }}>
        <ChartFilterBar />
        <Flex mt={3} flexDir={"column"}>
          <Flex
            gap={3}
            flexDirection={{ base: "column", lg: "row" }}
            pb={3}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <Chart type="price" titleChart="Price" renderingTime={500} />
            <Chart type="price" titleChart="Price P2P" renderingTime={1000} />
          </Flex>
          <Flex
            gap={3}
            flexDirection={{ base: "column", lg: "row" }}
            pb={3}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <Chart
              type="temperature"
              titleChart="Temperature"
              renderingTime={1500}
            />
            <Chart
              type="temperature"
              titleChart="Temperature P2P"
              renderingTime={2000}
            />
          </Flex>
          <Flex
            gap={3}
            flexDirection={{ base: "column", lg: "row" }}
            pb={3}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <Chart type="presence" titleChart="Presence" renderingTime={2500} />
            <Chart
              type="presence"
              titleChart="Presence P2P"
              renderingTime={3000}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
