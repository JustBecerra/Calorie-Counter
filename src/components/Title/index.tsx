import { Stack, Typography } from "@mui/material";

export const Title = () => (
  <Stack display="flex" flexDirection="column" alignItems="center" marginBottom="2rem" borderBottom="1px solid black" width="100%" borderTop="3px solid #2e7d32" paddingBottom="1rem">
    <Typography fontSize="2rem" fontWeight="600" fontFamily="Roboto Condensed,Verdana,sans-serif;" color="black" >
      Food Calculator
    </Typography>
    <Typography
      fontSize="1rem"
      fontWeight="500"
      fontFamily="Roboto Condensed,Verdana,sans-serif;"
      marginTop="0.2rem"
      color="#2e7d32"
    >
      Diet & Weight Management
    </Typography>
  </Stack>
);
