import Stack from "@mui/material/Stack";
import { Autocomplete, TextField, Button } from "@mui/material";

const foodItems = [
  {
    name: "Apple",
    calories: "100",
  },
  {
    name: "Milanesa",
    calories: "158",
  },
];

export const FoodPanel = () => {
  return (
    <Stack sx={{ width: 500, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Autocomplete
        freeSolo
        options={foodItems.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Check Calories"
            color="success"
            focused
            sx={{
                width: 300
            }}
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
      <Button variant="outlined" sx={{marginLeft: "4%"}}>Search</Button>
      <Button variant="outlined" sx={{marginLeft: "4%"}}>Clear</Button>
    </Stack>
  );
};
