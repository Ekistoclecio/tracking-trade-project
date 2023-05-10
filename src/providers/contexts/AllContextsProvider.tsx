import { AuthProvider } from "./authContext";
import { ProductProvider } from "./productContext";
import { ChartFiltersProvider } from "./chartFiltersContext";

import { theme } from "../../theme";

import { ChakraProvider } from "@chakra-ui/react";

export default function ContextsProvider(props: any) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <ProductProvider>
          <ChartFiltersProvider>{props.children}</ChartFiltersProvider>
        </ProductProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
