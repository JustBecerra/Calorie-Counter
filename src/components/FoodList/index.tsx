import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";
import { FoodItem } from "../FoodItem";

export const FoodList = () => {
  const { filteredData, expand, setExpand } = useFoodContext();
  const items = expand ? filteredData : filteredData.slice(0, 15);
  const theme = useTheme()
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <Stack width="89%" height="60%" borderTop={filteredData.length === 0 ? `2px solid ${theme.palette.common.black}` : 'none'} justifyContent="center" alignItems="center">
      {filteredData.length === 0 ? (
        <>
          <Stack width="70%" height="6rem" >
            <Typography
              fontSize="1rem"
              fontWeight="400"
              fontFamily="Fira Sans,Verdana,sans-serif;"
              marginTop="1rem"
              color={theme.palette.common.black}
            >
              Add your daily calories to see how much you consumed!
            </Typography>
          </Stack>
          <Stack
            width="70%"
            border={`2px solid ${theme.palette.primary.main}`}
            padding="1.5rem"
            borderRadius="0.25rem"
          >
            <Typography color={theme.palette.common.black}>Pro Tip:</Typography>
            <Typography color={theme.palette.common.black}>
              If you want to burn fat, you should eat more protein to reduce
              cravings
            </Typography>
          </Stack>
        </>
      ) : (
        <Stack height="100%" width="100%">
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
            }}
            flexDirection="column"
            alignItems='center'
            gridTemplateColumns={3}
            borderTop={`2px solid ${theme.palette.common.black}`}
          >
            {items.map((item, key) => (
              <FoodItem item={item} key={key} />
            ))}
            {items.length === 15 && filteredData.length > 0 && (
              <Button
                size="large"
                sx={{ marginBottom: "2rem", width: '8rem', fontSize: '1rem', borderRadiusL:'1rem', textTransform: 'none' }}
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
