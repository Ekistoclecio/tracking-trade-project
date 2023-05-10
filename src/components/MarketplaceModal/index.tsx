import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image,
} from "@chakra-ui/react";
import { MarketplaceModalProps } from "../../interfaces/interfaces";
import { SearchIcon } from "@chakra-ui/icons";
import useMarketplaceModal from "../../hooks/useMarketplaceModal";
import { useChartFiltersContext } from "../../providers/contexts/chartFiltersContext";

export default function MarketplaceModal({
  isOpen,
  onClose,
}: MarketplaceModalProps) {
  const {
    searchMarketplaceValue,
    localArrayMarketplaces,
    localFilterMarketplacesID,
    setFilterMarketplace,
    clearAndCloseModal,
    setSearchMarketplaceValue,
  } = useMarketplaceModal(onClose);

  const { setFilterMarketplacesID } = useChartFiltersContext();

  return (
    <Modal isOpen={isOpen} onClose={clearAndCloseModal} size={"xs"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={16}>Marketplaces</ModalHeader>
        <ModalCloseButton />
        <Divider color={"gray.200"} />
        <ModalBody
          px={3}
          maxH={"70vh"}
          overflow={"auto"}
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
          <InputGroup>
            <InputLeftElement
              h={"8"}
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Input
              h={"8"}
              fontSize={14}
              borderColor={"gray.200"}
              borderRadius={"40"}
              placeholder="Search..."
              color={"gray.500"}
              value={searchMarketplaceValue}
              onChange={(e) => setSearchMarketplaceValue(e.target.value)}
            />
          </InputGroup>
          <Divider color={"gray.200"} pt={2} />
          {localArrayMarketplaces.map((item, i) => (
            <>
              <Flex key={item.id} id={item.id} className="marketplace-item">
                <Checkbox
                  m={2}
                  borderColor={"gray.500"}
                  onChange={setFilterMarketplace}
                  defaultChecked={
                    localFilterMarketplacesID.indexOf(item.id) > -1
                      ? true
                      : false
                  }
                >
                  <Flex alignItems={"center"}>
                    <Image
                      mr={3}
                      boxSize={"60px"}
                      src={
                        item.pictureUrl
                          ? item.pictureUrl
                          : "https://nitm.ac.in/htmls/images/defaultuser.jpg"
                      }
                    />
                    {item.name}
                  </Flex>
                </Checkbox>
              </Flex>
              {localArrayMarketplaces.length - 1 < i ? (
                <Divider color={"gray.200"} />
              ) : (
                <></>
              )}
              <Divider color={"gray.200"} />
            </>
          ))}
        </ModalBody>
        <Divider color={"gray.200"} />
        <ModalFooter>
          <Button
            fontSize={16}
            colorScheme="blackAlpha"
            mr={3}
            onClick={clearAndCloseModal}
            fontWeight={500}
          >
            Cancel
          </Button>
          <Button
            fontSize={16}
            fontWeight={500}
            colorScheme="messenger"
            onClick={() => {
              setFilterMarketplacesID(localFilterMarketplacesID);
              clearAndCloseModal();
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
