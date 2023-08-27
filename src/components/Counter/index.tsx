import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const Counter = () => {
  const { totalConsumed, handleTable } = useFoodContext();
  const theme = useTheme()

  return (
    <Stack
      width="30%"
      height="30%"
      borderRadius="1rem"
      sx={{ backgroundColor: theme.palette.background.default }}
      flexDirection="column"
      alignSelf="start"
      mt="2rem"
      pb="2rem"
    >
      <Stack alignItems="center">
        <Typography
          mt="2rem"
          fontSize="2rem"
          fontWeight="600"
          fontFamily="Roboto Condensed,Verdana,sans-serif;"
          color={theme.palette.primary.main}
        >
          Consumption Table
        </Typography>
      </Stack>
      <Stack flexWrap="wrap" flexDirection="row"  alignItems="center" justifyContent="center">
        <Stack width="40%" alignItems="center">
          <Typography mt="4rem">Calories Consumed :</Typography>
          <Typography mt="1rem" >{totalConsumed.Calories.toFixed(2)}</Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography mt="4rem">Sugar Consumed :</Typography>
          <Typography mt="1rem">
            {totalConsumed.Added_Sugars.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography mt="4rem">Satured Fats Consumed :</Typography>
          <Typography mt="1rem">
            {totalConsumed.Saturated_Fats.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography mt="4rem">Solid Fats Consumed :</Typography>
          <Typography mt="1rem">
            {totalConsumed.Oils.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
      <Button variant="contained" sx={{ marginTop: "2rem", width:"30%", alignSelf: "center" }} onClick={handleTable}>
        Clear Table
      </Button>
    </Stack>
  );
};
