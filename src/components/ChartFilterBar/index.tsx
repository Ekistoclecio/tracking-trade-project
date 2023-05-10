import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import useChartFilterBar from "../../hooks/useChartFilterBar";

import Datepicker from "../customDatepicker";
import MarketplaceModal from "../MarketplaceModal";

export default function ChartFilterBar() {
  const {
    filterMarketplacesID,
    filterPeriod,
    filterFormOfPayment,
    date,
    setFilterFormOfPayment,
    setFilterPeriod,
    setDate,
  } = useChartFilterBar();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MarketplaceModal isOpen={isOpen} onClose={onClose} />
      <Flex
        flexWrap="wrap"
        bg={"white"}
        justifyContent={"space-around"}
        p={3}
        borderRadius={5}
        gap={3}
      >
        <Box flex={1}>
          <Text color={"black"} mb={2}>
            Period
          </Text>
          <Flex w={"100%"}>
            <Button
              borderRadius={0}
              borderLeftRadius={5}
              w={"33%"}
              colorScheme="messenger"
              fontWeight={400}
              bg={filterPeriod === "hourly" ? "#0063D1" : "#0078FF"}
              fontSize={15}
              onClick={() => setFilterPeriod("hourly")}
            >
              Hour
            </Button>
            <Button
              borderRadius={0}
              w={"33%"}
              colorScheme="messenger"
              fontWeight={400}
              bg={filterPeriod === "daily" ? "#0063D1" : "#0078FF"}
              fontSize={15}
              onClick={() => setFilterPeriod("daily")}
            >
              Day
            </Button>
            <Button
              borderRadius={0}
              borderRightRadius={5}
              w={"33%"}
              colorScheme="messenger"
              fontWeight={400}
              bg={filterPeriod === "weekly" ? "#0063D1" : "#0078FF"}
              fontSize={15}
              onClick={() => setFilterPeriod("weekly")}
            >
              Week
            </Button>
          </Flex>
        </Box>
        <Box flex={1}>
          <Text color={"black"} mb={2}>
            Date
          </Text>
          <Flex minW={"120px"}>
            <Datepicker date={date} setDate={setDate} />
          </Flex>
        </Box>
        <Box flex={1}>
          <Text color={"black"} mb={2}>
            Form of payment
          </Text>
          <Flex w={"100%"}>
            <Button
              borderRadius={0}
              borderLeftRadius={5}
              w={"50%"}
              colorScheme="messenger"
              fontWeight={400}
              fontSize={15}
              bg={filterFormOfPayment === "spot_price" ? "#0063D1" : "#0078FF"}
              onClick={() => setFilterFormOfPayment("spot_price")}
            >
              Spot Price
            </Button>
            <Button
              borderRadius={0}
              borderRightRadius={5}
              w={"50%"}
              colorScheme="messenger"
              fontWeight={400}
              fontSize={15}
              bg={
                filterFormOfPayment === "installment_price"
                  ? "#0063D1"
                  : "#0078FF"
              }
              onClick={() => setFilterFormOfPayment("installment_price")}
            >
              Installment Price
            </Button>
          </Flex>
        </Box>
        <Box flex={1}>
          <Text color={"black"} mb={2}>
            Marketplaces
          </Text>
          <Flex w={"100%"}>
            <Button
              borderRadius={5}
              w={"100%"}
              colorScheme="messenger"
              fontWeight={400}
              fontSize={15}
              onClick={onOpen}
            >
              {filterMarketplacesID.length > 0
                ? `${filterMarketplacesID.length} Marketplaces`
                : "All Marketplaces"}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
