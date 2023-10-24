import Stack from "@mui/material/Stack";
import {
  TextField,
  Button,
  Alert,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const FoodPanel = () => {
  const {
    searchValue,
    setSearchValue,
    setSearchFood,
    setClearInput,
    filteredData,
    isLoading,
    refetch,
  } = useFoodContext();
  const [popup, setPopup] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const theme = useTheme();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const debouncedInputValue = useDebounce<string>(searchValue, 600);
  const { vertical, horizontal, open } = popup;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchFood(true);
    setClearInput(false);
    refetch();
  };

  const handleButton = () => {
    if (!searchValue) {
      setPopup({ open: true, vertical: "top", horizontal: "right" });
      setErrorMessage("You need to enter something first!");
    } else {
      handleSearch();
    }
  };

  useEffect(() => {
    if (filteredData.length === 0 && searchValue && !isLoading) {
      setPopup({ open: true, vertical: "top", horizontal: "right" });
      setErrorMessage(`Oops looks like we don't have that!`);
    }
  }, [filteredData, isLoading]);

  useEffect(() => {
    handleSearch();
  }, [debouncedInputValue]);

  const handleClear = () => {
    setSearchFood(false);
    setClearInput(true);
    setSearchValue("");
  };

  const handleClose = () => {
    setPopup({ ...popup, open: false });
  };

  return (
    <>
      <Stack
        width="100%"
        flexDirection={{ xl: "row", md: "column", sm: "column" }}
        display="flex"
        alignItems="center"
        marginLeft={{ xl: "15%" }}
      >
        <TextField
          label="Check Calories"
          color="primary"
          focused
          sx={{
            width: { xl: "70%", md: "80%", sm: "80%" },
            marginX: { xl: "0", md: "auto", sm: "auto" },
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
        <Stack
          display="flex"
          width="80%"
          flexDirection="row"
          alignItems="center"
          justifyContent={{
            xl: "space-evenly",
            md: "space-between",
            sm: "space-between",
          }}
          marginTop="1.5rem"
        >
          <Button variant="outlined" onClick={handleButton} color="primary">
            <Typography
              sx={{
                fontFamily: theme.typography?.inter?.fontFamily,
                textTransform: "none",
              }}
            >
              Search
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: theme.typography?.inter?.fontFamily,
            }}
            onClick={handleClear}
            color="secondary"
          >
            <Typography
              sx={{
                fontFamily: theme.typography?.inter?.fontFamily,
                textTransform: "none",
              }}
            >
              Clear
            </Typography>
          </Button>
          <Typography
            width="30%"
            fontFamily={theme.typography?.inter?.fontFamily}
            color={theme.palette.common.black}
          >
            {filteredData.length + " matches"}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
