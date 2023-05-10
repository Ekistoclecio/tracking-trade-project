import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Image,
} from "@chakra-ui/react";
import { HeaderProps } from "../../interfaces/interfaces";
import useHeader from "../../hooks/useHeader";
export default function Header({ toggleSideBar, sideBarIsOpen }: HeaderProps) {
  const {
    searchProductValue,
    localArrayProducts,
    initialsUserName,
    userName,
    isOpen,
    logout,
    setSearchProductValue,
    setProduct,
    toggleFullScreen,
    onOpen,
    onClose,
  } = useHeader();

  return (
    <Flex h={12} bg={"white"} justifyContent="space-between">
      <HStack>
        <Box
          as="button"
          bg={"white"}
          pl={4}
          pr={2}
          pb={1}
          onClick={() => toggleSideBar(!sideBarIsOpen)}
        >
          <Icon boxSize={5} color="gray.500" as={HamburgerIcon} />
        </Box>
        <Popover autoFocus={false} isOpen={isOpen} placement="bottom-start">
          <PopoverTrigger>
            <InputGroup>
              <InputLeftElement
                h={"8"}
                pointerEvents="none"
                children={<SearchIcon color="gray.500" />}
              />
              <Input
                h={"8"}
                w={48}
                fontSize={14}
                borderRadius={"40"}
                variant="filled"
                placeholder="Search..."
                color={"black"}
                onBlur={() => setTimeout(onClose, 50)}
                value={searchProductValue}
                onChange={(e) => {
                  onOpen();
                  setSearchProductValue(() => e.target.value);
                }}
              />
            </InputGroup>
          </PopoverTrigger>
          <PopoverContent minW={"min-content"}>
            <PopoverBody p={0}>
              <Box
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                p={3}
                minW={"max-content"}
                maxH={"320px"}
                overflowY={"auto"}
              >
                <Text mb={5} fontSize={15} fontWeight={"500"}>
                  Products
                </Text>
                {localArrayProducts.length > 0 ? (
                  localArrayProducts.map((item) => (
                    <Flex
                      as={"button"}
                      cursor={"pointer"}
                      key={item.id}
                      id={item.id}
                      onClick={setProduct}
                      _hover={{ background: "gray.400" }}
                      className="popoverItem"
                      p={1}
                      w="100%"
                    >
                      <Image
                        boxSize={"40px"}
                        mr={3}
                        src={
                          item.pictureUrl
                            ? item.pictureUrl
                            : "https://nitm.ac.in/htmls/images/defaultuser.jpg"
                        }
                      />
                      <Box>
                        <Text
                          textAlign={"start"}
                          fontSize={14}
                          fontWeight={"600"}
                          minW={"max-content"}
                        >
                          {item.name}
                        </Text>
                        <Text
                          textAlign={"start"}
                          fontSize={12}
                          color={"gray.500"}
                        >
                          {item.brand.name}
                        </Text>
                      </Box>
                    </Flex>
                  ))
                ) : (
                  <Text fontSize={14} fontWeight={"600"}>
                    No products found.
                  </Text>
                )}
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <HStack mr={3}>
        <Icon
          as="button"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="4"
          fill="gray.500"
          className="bi bi-fullscreen"
          viewBox="0 0 16 16"
          mb={0.5}
          mr={3}
          cursor={"pointer"}
          onClick={toggleFullScreen}
        >
          <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
        </Icon>
        <Popover>
          <PopoverTrigger>
            <Flex
              alignItems={"center"}
              color={"black"}
              fontSize={14}
              cursor={"pointer"}
            >
              <Circle size="30px" bg="blue" color="white" mr={2} fontSize={16}>
                {initialsUserName}
              </Circle>
              {userName.split(" ")[0]} <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent maxW={"min-content"}>
            <PopoverBody color={"black"} p={0} py={2}>
              <Flex
                as={"button"}
                _hover={{ background: "gray.300" }}
                cursor={"pointer"}
                px={3}
                py={1}
                onClick={logout}
              >
                <Icon
                  color={"red"}
                  mt={1}
                  mr={2}
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  fill="currentColor"
                  className="bi bi-power"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1v7h1V1h-1z" />
                  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                </Icon>
                Logout
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </Flex>
  );
}
