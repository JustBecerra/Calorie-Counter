import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { getCondimentFood, getFood, getFoodTable } from "../services/APIcalls";
import { CondimentType, FoodRow, TableType } from "../utils/types";

interface FoodContextValues {
  clearInput: boolean;
  setClearInput: React.Dispatch<React.SetStateAction<boolean>>;
  allFood: TableType[];
  setAllFood: React.Dispatch<React.SetStateAction<TableType[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchFood: boolean;
  setSearchFood: React.Dispatch<React.SetStateAction<boolean>>;
  filteredData: TableType[];
  setFilteredData: React.Dispatch<React.SetStateAction<TableType[]>>;
  isLoading: boolean;
  refetch: () => void;
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  totalCalories: number;
  setTotalCalories: React.Dispatch<React.SetStateAction<number>>;
}

type FoodProviderProps = {
  children: ReactElement;
};

const FoodContext = createContext<FoodContextValues>({} as FoodContextValues);

export const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [allFood, setAllFood] = useState<TableType[]>([]);
  const [clearInput, setClearInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchFood, setSearchFood] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<TableType[]>([]);
  const [expand, setExpand] = useState<boolean>(false);
  const [totalCalories, setTotalCalories] = useState<number>(0)
  const { data: queryFood } = useQuery<FoodRow[]>("food", getFood);
  const { data: queryCondiment } = useQuery<CondimentType[]>(
    "condiment",
    getCondimentFood
  );
  const {
    data: queryTable,
    isLoading,
    refetch,
  } = useQuery<TableType[]>("table", getFoodTable);

  useEffect(() => {
    if (queryTable) setAllFood(queryTable);
  }, [searchValue, queryTable]);

  useEffect(() => {
    if (clearInput) {
      setFilteredData([]);
      setExpand(false);
    }
  }, [clearInput]);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredData([]);
      setExpand(false);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchFood && searchValue) {
      setFilteredData(
        allFood.filter((item) => {
          if (
            item.Display_Name.toLowerCase().includes(searchValue.toLowerCase())
          )
            return item;
        })
      );
    }
  }, [allFood, searchFood, searchValue]);
  return (
    <FoodContext.Provider
      value={{
        clearInput,
        setClearInput,
        allFood,
        setAllFood,
        searchValue,
        setSearchValue,
        searchFood,
        setSearchFood,
        filteredData,
        setFilteredData,
        isLoading,
        refetch,
        expand,
        setExpand,
        totalCalories,
        setTotalCalories
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = (): FoodContextValues => {
  const {
    clearInput,
    setClearInput,
    allFood,
    setAllFood,
    searchValue,
    setSearchValue,
    searchFood,
    setSearchFood,
    filteredData,
    setFilteredData,
    isLoading,
    refetch,
    expand,
    setExpand,
    totalCalories,
    setTotalCalories
  } = useContext(FoodContext);

  return {
    clearInput,
    setClearInput,
    allFood,
    setAllFood,
    searchValue,
    setSearchValue,
    searchFood,
    setSearchFood,
    filteredData,
    setFilteredData,
    isLoading,
    refetch,
    expand,
    setExpand,
    totalCalories,
    setTotalCalories
  };
};
