import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";
import { FoodItem } from "../FoodItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useEffect, useState } from "react";
import { TableType } from "../../utils/types";

export const FoodList = () => {
  const { filteredData, setExpand, expand, searchValue, allFood } =
    useFoodContext();
  const defaultItemCount = window.screen.width > 744 ? 15 : 5;
  const [items, setItems] = useState<TableType[]>(
    filteredData.slice(0, defaultItemCount)
  );
  const theme = useTheme();
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  useEffect(() => {
    if (expand) setItems(filteredData);
    else setItems(filteredData.slice(0, defaultItemCount));
  }, [defaultItemCount, expand, filteredData]);

  return (
    <Stack
      width="100%"
      height="70%"
      borderRadius="1rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        height="100%"
        width="89%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2rem"
      >
        <Typography
          color={theme.palette.primary.main}
          alignSelf="flex-start"
          marginBottom="0.5rem"
          fontSize="1.5rem"
          fontFamily={theme.typography?.lora?.fontFamily}
        >
          Select a food
        </Typography>
        <Stack
          sx={{
            overflow: "auto",
            marginBottom: "2rem",
          }}
          flexDirection="column"
          display="flex"
          alignItems="center"
          gridTemplateColumns={3}
          borderTop={`2px solid ${theme.palette.common.black}`}
          width="100%"
          height="80%"
        >
          {filteredData.length === 0 && searchValue.length > 1 ? (
            <Box
              height="40%"
              width="40%"
              sx={{
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: "0.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Typography
                sx={{
                  marginTop: "1rem",
                  fontFamily: theme.typography?.inter?.fontFamily,
                  fontSize: "1rem",
                }}
              >
                Looks like we don't have that.
              </Typography>
              <Typography
                sx={{
                  marginY: "0.5rem",
                  fontFamily: theme.typography?.inter?.fontFamily,
                  fontSize: "1rem",
                }}
              >
                Try entering something else!
              </Typography>
              <SentimentVeryDissatisfiedIcon
                sx={{ width: "2.5rem", height: "2.5rem" }}
              />
            </Box>
          ) : (
            <>
              {filteredData.length > 0
                ? items.map((item, key) => <FoodItem item={item} key={key} />)
                : allFood
                    .slice(0, defaultItemCount)
                    .map((item, key) => <FoodItem item={item} key={key} />)}
              {filteredData.length > defaultItemCount && (
                <Button
                  size="large"
                  sx={{
                    marginBottom: "2rem",
                    width: "8rem",
                    fontSize: "1rem",
                    borderRadius: "0.75rem",
                    textTransform: "none",
                    fontFamily: theme.typography?.inter?.fontFamily,
                  }}
                  onClick={handleExpand}
                  variant="text"
                  color="success"
                >
                  See more
                </Button>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
