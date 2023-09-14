import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";
import { FoodItem } from "../FoodItem";

export const FoodList = () => {
  const { filteredData, expand, setExpand } = useFoodContext();
  const items = expand ? filteredData : filteredData.slice(0, 15);
  const theme = useTheme();
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <Stack
      width="100%"
      height="70%"
      borderRadius="1rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        height="100%"
        width="89%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2rem"
      >
        <Typography
          color={theme.palette.primary.main}
          alignSelf="flex-start"
          marginBottom="0.5rem"
          fontSize="1.5rem"
          fontFamily={theme.typography?.lora?.fontFamily}
        >
          Select a food
        </Typography>
        <Stack
          sx={{
            overflow: "auto",
            marginBottom: "2rem",
          }}
          flexDirection="column"
          alignItems="center"
          gridTemplateColumns={3}
          borderTop={`2px solid ${theme.palette.common.black}`}
          width="100%"
        >
          {filteredData.length === 0 ? (
            <Box height="100%">
              <Typography
                sx={{
                  marginY: "1rem",
                  padding: "0.5rem",
                  fontFamily: theme.typography?.inter?.fontFamily,
                }}
              >
                Looks like we don't have that.
              </Typography>
            </Box>
          ) : (
            <>
              {items.map((item, key) => (
                <FoodItem item={item} key={key} />
              ))}
              {items.length === 15 && filteredData.length > 0 && (
                <Button
                  size="large"
                  sx={{
                    marginBottom: "2rem",
                    width: "8rem",
                    fontSize: "1rem",
                    borderRadius: "0.75rem",
                    textTransform: "none",
                    fontFamily: theme.typography?.inter?.fontFamily,
                  }}
                  onClick={handleExpand}
                  variant="text"
                  color="success"
                >
                  See more
                </Button>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
