import { Box, Typography } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodList = () => {
  const { filteredData, clearInput, setClearInput } = useFoodContext();
  if(clearInput){
    filteredData.length = 0
  } else {
    filteredData.length = 15
  }
  
  return (
    <Box>
      {filteredData.map((item) => 
        <Typography>{item.Display_Name}</Typography>
      )}
    </Box>
  );
};
