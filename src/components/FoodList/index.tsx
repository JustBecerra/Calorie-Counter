import { Stack, Typography } from "@mui/material";
import { useFoodContext } from "../../context/FoodProvider";

export const FoodList = () => {
  const { filteredData } = useFoodContext();

  return (
    <Stack sx={{
      marginTop: '10vh',
      flexDirection: 'row',
      overflowY: 'scroll',
      width: '50vw',
      height: '70vh',
      flexWrap: "wrap",
      gridTemplateColumns: 3
    }}>
      {filteredData.map((item, key) => 
        <Stack key={key} sx={{
          marginY: '1rem',
          padding: '0.5rem',
          gap: '0.5rem',
          alignItems: 'flex-start',
          border: '1px solid green',
          width: '80%',
          height: '7rem'
        }}>
          <Typography sx={{alignSelf:'center'}}>{item.Display_Name}</Typography>
          <Stack sx={{flexDirection:'row', marginTop:'0.5rem', gap:'22rem'}}>
            <Typography maxWidth={'fit-content'}>{'Portion: ' + item.Portion_Amount + ' ' + item.Portion_Display_Name}</Typography>
            <Typography maxWidth={'fit-content'}>{item.Calories + ' Calories per portion'}</Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
