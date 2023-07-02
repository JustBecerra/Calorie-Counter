import { Stack, Typography, useTheme } from "@mui/material";

export const Title = () => {
  const theme = useTheme()
  return(
  <Stack display="flex" flexDirection="column" alignItems="center" marginY="2rem" borderBottom={`1px solid ${theme.palette.common.black}`} width="95%" paddingBottom="1rem">
    <Typography fontSize="2rem" fontWeight="600" fontFamily="Roboto Condensed,Verdana,sans-serif;" color={theme.palette.common.black} >
      Food Calculator
    </Typography>
    <Typography
      fontSize="1rem"
      fontWeight="500"
      fontFamily="Roboto Condensed,Verdana,sans-serif;"
      marginTop="0.2rem"
      color={theme.palette.primary.main}
    >
      Diet & Weight Management
    </Typography>
  </Stack>
)}
