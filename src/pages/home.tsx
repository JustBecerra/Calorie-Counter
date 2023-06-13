import { Stack } from "@mui/material";
import { FoodList } from "../components/FoodList";
import { FoodPanel } from "../components/FoodPanel";
import { Title } from "../components/Title";



export const Home = () => (
  <Stack width="100%" height="100%" justifyContent="center" alignItems="center" >
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
  </Stack>
);
