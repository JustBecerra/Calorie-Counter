import Stack from "@mui/material/Stack";
import {
  TextField,
  Button,
  Alert,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";
import { useState } from "react";

export const FoodPanel = () => {
  const {
    searchValue,
    setSearchValue,
    setSearchFood,
    setClearInput,
    filteredData,
  } = useFoodContext();
  const [popup, setPopup] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { vertical, horizontal, open } = popup;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (newState: SnackbarOrigin) => {
    setSearchFood(true);
    setClearInput(false);
    if (!searchValue) {
      setPopup({ open: true, ...newState });
      setErrorMessage("You need to enter something first!");
    }
    if (!filteredData.length && searchValue) {
      setPopup({ open: true, ...newState });
      setErrorMessage(`Oops looks like we don't have that!`);
    }
  };

  const handleClear = () => {
    setSearchFood(false);
    setClearInput(true);
    setSearchValue("");
  };

  const handleClose = () => {
    setPopup({ ...popup, open: false });
  };

  return (
    <Stack
      width="40rem"
      flexDirection="row"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
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
      {errorMessage && (
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
      <Button
        variant="outlined"
        sx={{ marginLeft: "4%" }}
        onClick={() => handleSearch({ vertical: "top", horizontal: "center" })}
      >
        Search
      </Button>
      <Button
        variant="outlined"
        sx={{ marginLeft: "4%" }}
        onClick={handleClear}
      >
        Clear
      </Button>
      <Typography width={100} marginLeft="1.25rem" fontFamily="monospace">
        {filteredData.length + " matches"}
      </Typography>
    </Stack>
  );
};
