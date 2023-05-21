import { ReactElement, createContext, useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getCondimentFood, getFood, getFoodTable } from "../services/APIcalls";
import { CondimentType, FoodRow, TableType } from "../utils/types";

interface FoodContextValues {
  clearInput: boolean;
  setClearInput: React.Dispatch<React.SetStateAction<boolean>>;
  allFood: FoodType[];
  setAllFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

type FoodProviderProps = {
  children: ReactElement;
};

const FoodContext = createContext<FoodContextValues>(
  {} as FoodContextValues
);

type FoodType = FoodRow | CondimentType | TableType 

export const FoodProvider: React.FC<FoodProviderProps> = ({
  children,
}) => {
  const [allFood, setAllFood] = useState<FoodType[]>([]);
  const [clearInput, setClearInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('')
  const { data: queryFood } = useQuery<FoodRow[]>(
    "food",
    getFood
  );
  const { data: queryCondiment } = useQuery<CondimentType[]>(
    "condiment",
    getCondimentFood
  );
  const { data: queryTable } = useQuery<TableType[]>(
    "table",
    getFoodTable
  );

  useEffect(() => {
    if(queryFood)
    setAllFood(queryFood);
  }, [searchValue]);
  return (
    <FoodContext.Provider value={{ clearInput, setClearInput, allFood, setAllFood, searchValue, setSearchValue }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = (): FoodContextValues => {
  const { clearInput, setClearInput, allFood, setAllFood, searchValue, setSearchValue } = useContext(FoodContext);

  return {
    clearInput,
    setClearInput,
    allFood,
    setAllFood,
    searchValue,
    setSearchValue
  };
};
