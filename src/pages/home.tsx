import { Stack, useTheme } from "@mui/material";
import { FoodList } from "../components/FoodList";
import { FoodPanel } from "../components/FoodPanel";
import { Title } from "../components/Title";
import { Counter } from "../components/Counter";
import { useFoodContext } from "../context/FoodProvider";

export const Home = () => {
  const { totalConsumed } = useFoodContext();
  const theme = useTheme();
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      gap="8rem"
      height="100vh"
      sx={{
        backgroundImage: "assets/newbackgroundfood.jpg",
        backgroundSize: "cover",
      }}
    >
      <Stack
        display="flex"
        alignItems="center"
        width="50%"
        height="30%"
        borderRadius="1rem"
        marginTop="1rem"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Title />
        <FoodPanel />
      </Stack>
      <Stack
        display="flex"
        flexDirection="row"
        width="80%"
        height="45%"
        gap="2rem"
      >
        <FoodList />
        {/* <Counter /> */}
      </Stack>
    </Stack>
  );
};
