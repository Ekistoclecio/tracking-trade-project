import {
  Box,
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import Datepicker from "../Datepicker/Index";
import useMarketplaceTable from "../../hooks/useMarketplaceTable";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function MarketplaceTable() {
  const { date, priceType, dataMarketplaceList, setPriceType, setDate } =
    useMarketplaceTable();
  return (
    <Box
      mt={3}
      p={3}
      bg={"gray.50"}
      borderRadius={5}
      textColor={"black"}
      maxH={"60.5vh"}
      minH={"555px"}
      minW={"min-content"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} pb={5}>
        <Flex alignItems={"center"}>
          <Text fontWeight={600} fontSize={16}>
            Offer
          </Text>
          <Tooltip label="I'm Tooltip" aria-label="A tooltip">
            <Icon ml={3} mt={"3px"} width="4" height="4" />
          </Tooltip>
        </Flex>
        <Flex gap={3}>
          <Box>
            <Text fontSize={16} pb={2}>
              Date
            </Text>
            <Flex w={"120px"}>
              <Datepicker date={date} setDate={setDate} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize={16} pb={2}>
              Price
            </Text>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="5"
                color={"white"}
                bg={"#0078FF"}
                _hover={{ bg: "#0063D1" }}
              >
                {priceType === "mode"
                  ? "Mode"
                  : priceType === "minimum"
                  ? "Minimum"
                  : "Maximum"}{" "}
                <ChevronDownIcon />
              </MenuButton>
              <MenuList minW={32} border={0} boxShadow={"md"}>
                <MenuItem
                  _hover={{ bg: "#0078FF", color: "white" }}
                  _focus={{ bg: "#0078FF", color: "white" }}
                  onClick={() => setPriceType("mode")}
                >
                  Mode
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#0078FF", color: "white" }}
                  _focus={{ bg: "#0078FF", color: "white" }}
                  onClick={() => setPriceType("minimum")}
                >
                  Minimum
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#0078FF", color: "white" }}
                  _focus={{ bg: "#0078FF", color: "white" }}
                  onClick={() => setPriceType("maximum")}
                >
                  Maximum
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Box
        overflowY={"scroll"}
        maxH={"49vh"}
        minH={"420px"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.01)`,
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          },
        }}
      >
        <TableContainer>
          <Table>
            <Thead>
              <Tr p={0}>
                <Th p={0}>Marketplace</Th>
                <Th p={0}>
                  <Center>Presence</Center>
                </Th>
                <Th p={0}>
                  <Center>SP (R$)</Center>
                </Th>
                <Th p={0}>
                  <Center>%RRP</Center>
                </Th>
                <Th p={0}>
                  <Center>IP (R$)</Center>
                </Th>
                <Th p={0}>
                  <Center>%RRP</Center>
                </Th>
                <Th p={0}>
                  <Center>View</Center>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataMarketplaceList.map((item) => (
                <Tr key={item.id} py={2}>
                  <Td fontSize={12} p={0} py={1}>
                    {item.name}
                  </Td>
                  <Td fontSize={12} p={0}>
                    <Center>{item.shareCustumer + "%"}</Center>
                  </Td>
                  <Td fontSize={12} p={0}>
                    <Center>{item.spot_price.toLocaleString()}</Center>
                  </Td>
                  <Td fontSize={12} p={0}>
                    <Center>
                      <Box
                        bg={`rgba(255, 0, 0, ${Math.abs(item.spot_rrp) / 100})`}
                        py={1}
                        px={4}
                        borderRadius={5}
                      >
                        <Center>{Math.abs(item.spot_rrp) + "%"}</Center>
                      </Box>
                    </Center>
                  </Td>
                  <Td fontSize={12} p={0}>
                    <Center>{item.instalment_price.toLocaleString()}</Center>
                  </Td>
                  <Td fontSize={12} p={0}>
                    <Center>
                      <Box
                        bg={`rgba(255, 0, 0, ${
                          Math.abs(item.instalment_rrp) / 100
                        })`}
                        py={1}
                        px={4}
                        borderRadius={5}
                      >
                        <Center>{Math.abs(item.instalment_rrp) + "%"}</Center>
                      </Box>
                    </Center>
                  </Td>
                  <Td w={"8%"} p={0}>
                    <Center>
                      {item.url != null ? (
                        <Box as="a" href={item.url} target="_blank">
                          <Icon
                            xmlns="http://www.w3.org/2000/svg"
                            width="3"
                            height="3"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </Icon>
                        </Box>
                      ) : (
                        <Icon
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          fill="currentColor"
                          className="bi bi-slash-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
                        </Icon>
                      )}
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
