import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Home } from "./pages/home";
import { FoodProvider } from "./context/FoodProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FoodProvider>
        <Home />
      </FoodProvider>
    </QueryClientProvider>
  );
}

export default App;
