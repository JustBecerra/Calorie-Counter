import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { getFoodTable } from "../services/APIcalls";
import { ConsumedType, TableType } from "../utils/types";

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
  totalConsumed: ConsumedType;
  setTotalConsumed: React.Dispatch<React.SetStateAction<ConsumedType>>;
  clearTable: boolean,
  setClearTable: React.Dispatch<React.SetStateAction<boolean>>;
  handleTable: () => void
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
  const [totalConsumed, setTotalConsumed] = useState<ConsumedType>({
    Calories: 0,
    Saturated_Fats: 0,
    Added_Sugars: 0,
  });
  const [clearTable, setClearTable] = useState<boolean>(false)
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

  const handleTable = () => {
    setClearTable(true)
    setTotalConsumed((prevState) => ({
      ...prevState,
      Calories:0,
      Satured_Fats: 0,
      Added_Sugars: 0
    }))
  }

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
        totalConsumed,
        setTotalConsumed,
        clearTable,
        setClearTable,
        handleTable
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
    totalConsumed,
    setTotalConsumed,
    clearTable,
    setClearTable,
    handleTable
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
    totalConsumed,
    setTotalConsumed,
    clearTable,
    setClearTable,
    handleTable
  };
};
