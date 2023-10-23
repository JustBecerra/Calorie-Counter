import { Stack, useTheme } from "@mui/material";
import { FoodList } from "../components/FoodList";
import { FoodPanel } from "../components/FoodPanel";
import { Title } from "../components/Title";
import { Counter } from "../components/Counter";

export const Home = () => {
  const theme = useTheme();
  return (
    <Stack
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection={{ xl: "row", md: "column", sm: "column" }}
      gap="1rem"
      height={{ xl: "100vh", md: "auto", sm: "auto" }}
      sx={{
        backgroundImage: "assets/newbackgroundfood.jpg",
        backgroundSize: "cover",
      }}
    >
      <Stack
        display="flex"
        alignItems="center"
        width={{ xl: "50%", md: "90%", sm: "90%" }}
        height="90%"
        borderRadius="1rem"
        marginTop="1rem"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Title />
        <FoodPanel />
        <FoodList />
      </Stack>
      <Stack
        display="flex"
        flexDirection="row"
        width="40%"
        height="60%"
        gap="2rem"
      >
        <Counter />
      </Stack>
    </Stack>
  );
};
