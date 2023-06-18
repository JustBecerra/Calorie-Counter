import { Stack } from "@mui/material";
import { FoodList } from "../components/FoodList";
import { FoodPanel } from "../components/FoodPanel";
import { Title } from "../components/Title";
import { Counter } from "../components/Counter";
import { useFoodContext } from "../context/FoodProvider";

export const Home = () => {
  const { totalConsumed } = useFoodContext();
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      gap="8rem"
    >
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="2rem"
        width="45%"
        sx={{ backgroundColor: "#f7f6f5" }}
      >
        <Title />
        <FoodPanel />
        <FoodList />
      </Stack>
      {totalConsumed.Calories > 0 && <Counter />}
    </Stack>
  );
};
