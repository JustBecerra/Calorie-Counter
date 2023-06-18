import { Button, Stack, Typography } from '@mui/material'
import { useFoodContext } from '../../context/FoodProvider'

export const Counter = () => {
  const { totalConsumed, handleTable } = useFoodContext()
  return (
    <Stack width="30%" height="50rem" sx={{backgroundColor: "#f7f6f5"}} flexDirection="column" alignSelf="start" mt="2rem">
        <Typography mt="2rem" fontSize="2rem" fontWeight="600" fontFamily="Roboto Condensed,Verdana,sans-serif;" color="#2e7d32">
            Consumption Table
        </Typography>
        <Typography mt="4rem">
            Calories Consumed : 
        </Typography>
        <Typography mt="2rem">
            {totalConsumed.Calories.toFixed(2)}
        </Typography>
        <Typography mt="2rem">
            Sugar Consumed : 
        </Typography>
        <Typography mt="2rem">
            {totalConsumed.Added_Sugars.toFixed(2)}
        </Typography>
        <Typography mt="2rem">
            Satured Fats Consumed : 
        </Typography>
        <Typography mt="2rem">
            {totalConsumed.Saturated_Fats.toFixed(2)}
        </Typography>
        <Button sx={{marginTop:"2rem"}} onClick={handleTable}>Clear Table</Button>
    </Stack>
  )
}
