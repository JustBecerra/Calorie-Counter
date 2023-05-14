import Stack from "@mui/material/Stack";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useQuery } from "react-query";
import { FoodRow } from "../../utils/types";
import { useEffect, useState } from "react";
import { getFood } from "../../services/APIcalls";

export const FoodPanel = () => {
  const [allFood, setAllFood] = useState<FoodRow[]>([]);

  const { data: queryFood, refetch: refetchFood } = useQuery<FoodRow[]>(
    "food",
    getFood
  );
  useEffect(() => {
    setAllFood(queryFood as FoodRow[]);
  }, [queryFood]);

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
        options={allFood.map(option => option.display_name)}
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
