import { Button, Stack, Typography, useTheme } from "@mui/material";
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
      width="50%"
      height="100%"
      borderRadius="1rem"
      sx={{ backgroundColor: theme.palette.background.default }}
      justifyContent="center"
      alignItems="center"
    >
      {filteredData.length === 0 ? (
        <>
          <Stack
            height="100%"
            width="80%"
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
              borderTop={filteredData.length === 0 ? `2px solid ${theme.palette.common.black}` : 'none'}
              width="100%"
            >
              <Typography>
                Looks like we don't have that.
              </Typography>
            </Stack>
          </Stack>
        </>
      ) : (
        <Stack
          height="100%"
          width="80%"
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
          >
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
                  borderRadiusL: "1rem",
                  textTransform: "none",
                }}
                onClick={handleExpand}
                variant="text"
                color="success"
              >
                See more
              </Button>
            )}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
