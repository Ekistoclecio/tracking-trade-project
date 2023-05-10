import { Box, CloseButton, Flex, HStack, Icon, Text } from "@chakra-ui/react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function SideBar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <Box
      transition={"1s ease"}
      bg={"gray.800"}
      w={{ base: isOpen ? "100vw" : "0px", lg: isOpen ? "240px" : "60px" }}
      pos="static"
      minH={"100vh"}
      overflow="hidden"
      display={"block"}
      py={5}
    >
      <Flex
        mx="5"
        mt="20"
        mb={1}
        display={isOpen ? "flex" : "none"}
        justifyContent="space-between"
        color={"gray.500"}
      >
        <Text fontSize="18" fontFamily="monospace" fontWeight="700">
          MENU
        </Text>
        <CloseButton
          display={{ base: "block", lg: "none" }}
          onClick={setIsOpen}
        />
      </Flex>
      <HStack
        spacing="12px"
        as="a"
        px={5}
        py={3}
        color={"white"}
        _hover={{
          background: "blue.600",
          cursor: "pointer",
        }}
      >
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="5"
          fill="currentColor"
          className="bi bi-house-door"
          viewBox="0 0 16 16"
        >
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
        </Icon>
        <Text
          display={{ base: isOpen ? "block" : "none" }}
          fontSize={"16"}
          fontWeight={"300"}
        >
          Dashboard
        </Text>
      </HStack>
    </Box>
  );
}
