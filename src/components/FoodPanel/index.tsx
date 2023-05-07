import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

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
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        options={foodItems.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Check Calories"
            color="success"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </Stack>
  );
};
