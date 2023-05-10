import { Box, Center, Flex, Text } from "@chakra-ui/react";

import LoginScreen from "../components/LoginScreen";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import { useAuthContext } from "../providers/contexts/authContext";

export default function Home() {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const { logged } = useAuthContext();
  return logged ? (
    <Flex minH={"min-content"}>
      <Flex>
        <SideBar
          setIsOpen={() => setSideBarToggle(false)}
          isOpen={sideBarToggle}
        />
      </Flex>
      <Box flex={1} bg="gray.200" minH={"min-content"}>
        <Header
          sideBarIsOpen={sideBarToggle}
          toggleSideBar={setSideBarToggle}
        />
        <Dashboard />
      </Box>
    </Flex>
  ) : (
    <Box h={"100vh"} minH={"min-content"} bg="gray.200">
      <LoginScreen />
    </Box>
  );
}
