import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const Counter = () => {
  const { totalConsumed, handleTable } = useFoodContext();
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      height="100%"
      borderRadius="1rem"
      sx={{ backgroundColor: theme.palette.background.default }}
      flexDirection="column"
      alignSelf="start"
      justifyContent="start"
      alignItems="center"
    >
      <Stack alignItems="center" mt="2rem">
        <Typography
          fontSize="2rem"
          fontWeight="600"
          fontFamily={theme.typography?.lora?.fontFamily}
          color={theme.palette.primary.main}
        >
          Consumption Table
        </Typography>
      </Stack>
      <Stack
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            Calories Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Calories.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            Sugar Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Added_Sugars.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            Satured Fats Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Saturated_Fats.toFixed(2)}
          </Typography>
        </Stack>
        <Stack width="40%" alignItems="center">
          <Typography
            mt="3rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            Solid Fats Consumed :
          </Typography>
          <Typography
            mt="1rem"
            fontFamily={theme.typography?.inter?.fontFamily}
          >
            {totalConsumed.Oils.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        sx={{
          marginTop: "2rem",
          width: "30%",
          alignSelf: "center",
        }}
        onClick={handleTable}
      >
        <Typography
          sx={{
            fontFamily: theme.typography?.inter?.fontFamily,
            textTransform: "none",
          }}
        >
          Clear Table
        </Typography>
      </Button>
      <Stack
        width="70%"
        border={`2px solid ${theme.palette.primary.main}`}
        padding="1.5rem"
        borderRadius="0.25rem"
        mt="2rem"
      >
        <Typography
          color={theme.palette.common.black}
          fontFamily={theme.typography?.inter?.fontFamily}
        >
          Pro Tip:
        </Typography>
        <Typography
          color={theme.palette.common.black}
          fontFamily={theme.typography?.inter?.fontFamily}
        >
          If you want to burn fat, you should eat more protein to reduce
          cravings
        </Typography>
      </Stack>
    </Stack>
  );
};
