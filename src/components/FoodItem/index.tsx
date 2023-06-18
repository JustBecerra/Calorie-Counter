import { Stack, Typography } from "@mui/material";
import { TableType } from "../../utils/types";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useState } from "react";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodItem = ({ item, key }: { item: TableType; key: number }) => {
  const {totalCalories, setTotalCalories} = useFoodContext()
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    if(!selected) {
      setSelected(prev => !prev)
      setTotalCalories(prev => prev = prev + item.Calories)
    }
    if(selected && totalCalories > 0) {
      setSelected(prev => !prev)
      setTotalCalories(prev => prev = prev - item.Calories) 
    }
  }
  
  return (
    <Stack
      flexDirection="row"
      key={key}
      marginY="1rem"
      padding="0.5rem"
      gap="0.5rem"
      border="1px solid green"
      width="80%"
      height="5rem"
      borderRadius="0.25rem"
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
    >
      <Stack width="80%">
        <Typography
          width="fit-content"
          color="black"
          fontFamily="Fira Sans,Verdana,sans-serif;"
        >
          {item.Display_Name}
        </Typography>
        <Stack flexDirection="row" mt="0.5rem">
          <Typography
            maxWidth="fit-content"
            color="black"
            fontFamily="Fira Sans,Verdana,sans-serif;"
          >
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
      <Stack alignItems="end" justifyContent="center"  width="20%" marginRight="1rem">
        {selected ? (
          <CheckBoxOutlinedIcon sx={{ color: "#2e7d32" }} />
        ) : (
          <CheckBoxOutlineBlankOutlinedIcon sx={{ color: "#2e7d32" }} />
        )}
      </Stack>
    </Stack>
  );
};
