import { Stack, useTheme } from "@mui/material";
import { FoodList } from "../components/FoodList";
import { FoodPanel } from "../components/FoodPanel";
import { Title } from "../components/Title";
import { Counter } from "../components/Counter";
import { useFoodContext } from "../context/FoodProvider";

export const Home = () => {
  const { totalConsumed } = useFoodContext();
  const theme = useTheme()
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      gap="8rem"
      height="100vh"
      sx={{
        backgroundImage:"assets/newbackgroundfood.jpg",
        backgroundSize: "cover"
      }}
    >
      <Stack
        display="flex"
        alignItems="center"
        marginY="2rem"
        width="50%"
        height="94%"
        borderRadius="1rem"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Title />
        <FoodPanel />
        <FoodList />
      </Stack>
      {totalConsumed.Calories > 0 && <Counter />}
    </Stack>
  );
};
