import Stack from "@mui/material/Stack";
import {
  TextField,
  Button,
  Alert,
  Snackbar,
  Typography,
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
    refetch
  } = useFoodContext();
  const [popup, setPopup] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const debouncedInputValue = useDebounce<string>(searchValue, 600);
  const { vertical, horizontal, open } = popup;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchFood(true);
    setClearInput(false);  
    refetch()
  };

  const handleButton = () => {
    if(!searchValue){
      setPopup({ open: true, vertical: "top", horizontal: "right" });
      setErrorMessage("You need to enter something first!");
    }else{
      handleSearch()
    }
  }

  useEffect(() => {
    if (filteredData.length === 0 && searchValue && !isLoading) {
      setPopup({ open: true, vertical: "top", horizontal: "right" });
      setErrorMessage(`Oops looks like we don't have that!`);
    }
  }, [filteredData, isLoading])

  useEffect(() => {
    handleSearch()
  }, [debouncedInputValue])

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
      width="100%"
      flexDirection="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
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
        sx={{ marginLeft: "4%", fontFamily:"Fira Sans,Verdana,sans-serif;" }}
        onClick={handleButton}
      >
        Search
      </Button>
      <Button
        variant="outlined"
        sx={{ marginLeft: "4%", fontFamily:"Fira Sans,Verdana,sans-serif;" }}
        onClick={handleClear}
      >
        Clear
      </Button>
      <Typography width={100} marginLeft="1.25rem" fontFamily="monospace" color="black">
        {filteredData.length + " matches"}
      </Typography>
    </Stack>
  );
};
