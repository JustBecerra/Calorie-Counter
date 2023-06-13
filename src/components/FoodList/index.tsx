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
        borderRadius="0.25rem"
      >
        <Typography width="fit-content" color="black" fontFamily="Fira Sans,Verdana,sans-serif;">
          {item.Display_Name}
        </Typography>
        <Stack flexDirection="row" mt="0.5rem">
          <Typography maxWidth="fit-content" color="black" fontFamily="Fira Sans,Verdana,sans-serif;">
            {"Portion: " +
              item.Portion_Amount +
              " " +
              item.Portion_Display_Name +
              " | " +
              item.Calories +
              " Calories per portion"}
          </Typography>
        </Stack>
      </Stack>
    ));
  };

  return (
    <Stack mt="10vh" width="90%">
      {filteredData.length > 0 && <Typography color="#2e7d32" alignSelf="flex-start" marginBottom="0.5rem" fontSize="1.5rem">Select a food</Typography>}
      <Stack
        sx={{
          overflowY: "auto",
        }}
        flexDirection="column"
        height="72vh"
        alignItems="center"
        gridTemplateColumns={3}
        borderTop={filteredData.length > 0 ? "2px solid gray" : "none"}
      >
        {filteredData.length === 0 && (
          <>
          <Stack width="24rem" height="6rem">
            <Typography
              fontSize="1rem"
              fontWeight="400"
              fontFamily="Fira Sans,Verdana,sans-serif;"
              marginTop="1rem"
              color="black"
            >
              Add your daily calories to see how much you consumed!
            </Typography>
          </Stack>
          <Stack width="50%" border="2px solid #2e7d32" padding="1.5rem" borderRadius="0.25rem">
            <Typography color="black">
              Pro Tip:
            </Typography>
            <Typography color="black">
              If you want to burn fat, you should eat more protein to reduce cravings
            </Typography>
          </Stack>
          </>
        )}
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
    </Stack>
  );
};
