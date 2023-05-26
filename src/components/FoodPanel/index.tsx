import Stack from "@mui/material/Stack";
import { TextField, Button } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodPanel = () => {
  const { searchValue, setSearchValue, setSearchFood } =
    useFoodContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Stack
      sx={{
        width: 500,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="Check Calories"
        color="success"
        focused
        sx={{
          width: 300,
        }}
        value={searchValue}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        sx={{ marginLeft: "4%" }}
        onClick={() => setSearchFood(true)}
      >
        Search
      </Button>
      <Button variant="outlined" sx={{ marginLeft: "4%" }}>
        Clear
      </Button>
    </Stack>
  );
};
