import Stack from "@mui/material/Stack";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";
import { SyntheticEvent } from "react";

export const FoodPanel = () => {
  const {allFood, searchValue, setSearchValue, searchFood, setSearchFood} = useFoodContext()
  
  const handleChange = (event:SyntheticEvent<Element, Event>,value: string) => {
    setSearchValue(value);
  }
  
  return (
    <Stack
      sx={{
        width: 500,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Autocomplete
        freeSolo
        options={allFood && allFood.map(option => option.Display_Name)}
        value={searchValue}
        onInputChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Check Calories"
            color="success"
            focused
            sx={{
              width: 300,
            }}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}        
          />
        )}
      />
      <Button variant="outlined" sx={{ marginLeft: "4%" }} onClick={() => setSearchFood(prev => !prev)}>
        Search
      </Button>
      <Button variant="outlined" sx={{ marginLeft: "4%" }}>
        Clear
      </Button>
    </Stack>
  );
};
