import { Stack } from "@mui/material";
import { FoodList } from "../components/FoodList";
import { FoodPanel } from "../components/FoodPanel";

export const Home = () => (
    <Stack sx={{
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: "center"
    }}>
        <FoodPanel />
        <FoodList />
    </Stack>
)
    
