import { Box, Stack, Typography, useTheme } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import EggIcon from "@mui/icons-material/Egg";
import IcecreamIcon from "@mui/icons-material/Icecream";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

export const Title = () => {
  const theme = useTheme();
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginY="2rem"
      borderBottom={`2px solid ${theme.palette.common.black}`}
      width="89%"
      paddingBottom="1rem"
    >
      <Typography
        fontSize="2rem"
        fontWeight="600"
        fontFamily={theme.typography?.lora?.fontFamily}
        color={theme.palette.common.black}
      >
        Food Calculator
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="2rem"
        my="1rem"
      >
        <Typography
          fontSize="1rem"
          fontWeight="500"
          fontFamily={theme.typography?.inter?.fontFamily}
          marginTop="0.2rem"
          height="1rem"
          color={theme.palette.primary.main}
        >
          Diet & Weight Management
        </Typography>
        <Stack
          height="1rem"
          flexDirection="row"
          justifyContent="center"
          gap="1rem"
        >
          <FastfoodIcon />
          <EggIcon />
          <IcecreamIcon />
          <BreakfastDiningIcon />
          <LocalPizzaIcon />
        </Stack>
      </Box>
    </Stack>
  );
};
