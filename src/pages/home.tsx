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
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      gap="8rem"
      sx={{backgroundColor: "#242424"}}
    >
      <Stack
        display="flex"
        alignItems="center"
        marginY="2rem"
        width="45%"
        height="93vh"
        borderRadius="1rem"
        sx={{ backgroundColor: "gainsboro" }}
      >
        <Title />
        <FoodPanel />
        <FoodList />
      </Stack>
      {totalConsumed.Calories > 0 && <Counter />}
    </Stack>
  );
};
