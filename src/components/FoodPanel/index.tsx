import Stack from "@mui/material/Stack";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodPanel = () => {
  const {allFood} = useFoodContext()
  
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
        options={allFood && allFood.map(option => option.display_name)}
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
      <Button variant="outlined" sx={{ marginLeft: "4%" }}>
        Search
      </Button>
      <Button variant="outlined" sx={{ marginLeft: "4%" }}>
        Clear
      </Button>
    </Stack>
  );
};
