import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useFoodContext } from '../../context/FoodProvider'

export const Counter = () => {
  const { totalCalories } = useFoodContext()
  return (
    <Stack width="30%" height="50rem" sx={{backgroundColor: "#f7f6f5"}} flexDirection="column" alignSelf="start" mt="2rem">
        <Typography mt="2rem">
            Consumption Table
        </Typography>
        <Typography mt="4rem">
            Calories Consumed : 
        </Typography>
        <Typography mt="2rem">
            {totalCalories.toFixed(2)}
        </Typography>
    </Stack>
  )
}
