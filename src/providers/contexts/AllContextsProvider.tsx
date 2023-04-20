import { AuthProvider } from "./authContext";
import { ProductProvider } from "./productContext";
import { ChartFiltersProvider } from "./chartFiltersContext";

export default function ContextsProvider(props: any) {
  return (
    <AuthProvider>
      <ProductProvider>
        <ChartFiltersProvider>{props.children}</ChartFiltersProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
