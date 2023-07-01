import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const Counter = () => {
  const { totalConsumed, handleTable } = useFoodContext();
  const theme = useTheme()
  return (
    <Stack
      width="30%"
      height="50%"
      sx={{ backgroundColor: theme.palette.background.default }}
      flexDirection="column"
      alignSelf="start"
      mt="2rem"
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
      <Stack>
        <Typography mt="4rem">Calories Consumed :</Typography>
        <Typography mt="2rem">{totalConsumed.Calories.toFixed(2)}</Typography>
        <Typography mt="2rem">Sugar Consumed :</Typography>
        <Typography mt="2rem">
          {totalConsumed.Added_Sugars.toFixed(2)}
        </Typography>
        <Typography mt="2rem">Satured Fats Consumed :</Typography>
        <Typography mt="2rem">
          {totalConsumed.Saturated_Fats.toFixed(2)}
        </Typography>
      </Stack>
      <Button sx={{ marginTop: "2rem" }} onClick={handleTable}>
        Clear Table
      </Button>
    </Stack>
  );
};
