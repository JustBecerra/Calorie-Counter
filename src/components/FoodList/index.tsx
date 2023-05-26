import { Box, Typography } from "@mui/material"
import { useFoodContext } from "../../context/FoodProvider"

export const FoodList = () => {
    const {searchValue} = useFoodContext()
    return(
        <Box>
            <Typography>
                {searchValue}
            </Typography>
        </Box>
    )
}