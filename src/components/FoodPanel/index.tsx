import Stack from "@mui/material/Stack";
import { TextField, Button } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodPanel = () => {
  const { searchValue, setSearchValue, setSearchFood, setClearInput } =
    useFoodContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchFood(true)
    setClearInput(false)
  }

  const handleClear = () => {
    setSearchFood(false)
    setClearInput(true)
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
        onClick={handleSearch}
      >
        Search
      </Button>
      <Button variant="outlined" sx={{ marginLeft: "4%" }} onClick={handleClear}>
        Clear
      </Button>
    </Stack>
  );
};
