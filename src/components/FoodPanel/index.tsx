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
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EggIcon from '@mui/icons-material/Egg';
import IcecreamIcon from '@mui/icons-material/Icecream';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

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
  const theme = useTheme()
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
    <>
    <Stack
      width="100%"
      flexDirection="row"
      display="flex"
      alignItems="center"
      marginLeft="15%"
    >
      <TextField
        label="Check Calories"
        color="primary"
        focused
        sx={{
          width: "32%",
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
        color="primary"
      >
        Search
      </Button>
      <Button
        variant="outlined"
        sx={{ marginLeft: "4%", fontFamily:"Fira Sans,Verdana,sans-serif;" }}
        onClick={handleClear}
        color="secondary"
      >
        Clear
      </Button>
      <Typography width="30%" marginLeft="4%" fontFamily="monospace" color={theme.palette.common.black}>
        {filteredData.length + " matches"}
      </Typography>
    </Stack>
    <Stack height="2vh" my="4vh" flexDirection="row" justifyContent="center" gap="1rem">
      <FastfoodIcon />
      <EggIcon />
      <IcecreamIcon />
      <BreakfastDiningIcon />
      <LocalPizzaIcon />
    </Stack>
    </>
  );
};
