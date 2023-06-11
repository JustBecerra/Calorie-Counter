import { Button, Stack, Typography } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodList = () => {
  const { filteredData, expand, setExpand } = useFoodContext();
  const items = expand ? filteredData : filteredData.slice(0, 15);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  const renderItems = () => {
    return items.map((item, key) => (
      <Stack
        key={key}
        marginY="1rem"
        padding="0.5rem"
        gap="0.5rem"
        border="1px solid green"
        width="80%"
        height="5rem"
      >
        <Typography sx={{ alignSelf: "center" }}>
          {item.Display_Name}
        </Typography>
        <Stack flexDirection="row" mt="0.5rem" justifyContent="space-around">
          <Typography maxWidth={"fit-content"}>
            {"Portion: " +
              item.Portion_Amount +
              " " +
              item.Portion_Display_Name}
          </Typography>
          <Typography maxWidth={"fit-content"}>
            {item.Calories + " Calories per portion"}
          </Typography>
        </Stack>
      </Stack>
    ));
  };

  return (
    <Stack
      sx={{
        overflowY: "auto",
      }}
      mt="10vh"
      flexDirection="column"
      width="50vw"
      height="72vh"
      alignItems="center"
      gridTemplateColumns={3}
    >
      {filteredData.length === 0 && 
        <Stack width="24rem" height="6rem">
          <Typography fontSize="2rem" fontWeight="600" fontFamily="PlayfairDisplay">
            Food Calculator
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="500" fontFamily="PlayfairDisplay" marginTop="0.2rem">
            Diet & Weight Management
          </Typography>
          <Typography fontSize="1rem" fontWeight="400" fontFamily="PlusJakartaSans" marginTop="1rem">
            add your daily calories to see how much you consumed!
          </Typography>
        </Stack>
      }
      {renderItems()}
      {items.length === 15 && filteredData.length > 0 && (
        <Button
          size="large"
          sx={{ marginBottom: "2rem" }}
          onClick={handleExpand}
        >
          see more
        </Button>
      )}
    </Stack>
  );
};
