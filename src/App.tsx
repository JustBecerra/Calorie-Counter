import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Home } from "./pages/home";
import { FoodProvider } from "./context/FoodProvider";
import { ThemeProvider } from "@mui/material";
import { theme } from "./lib/theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FoodProvider>
          <Home />
        </FoodProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
