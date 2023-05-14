import { ReactElement, createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getFood } from "../services/APIcalls";
import { FoodRow } from "../utils/types";

interface FoodContextValues {
  clearInput: boolean;
  setClearInput: React.Dispatch<React.SetStateAction<boolean>>;
  allFood: FoodRow[];
  setAllFood: React.Dispatch<React.SetStateAction<FoodRow[]>>;
}

type FoodProviderProps = {
  children: ReactElement;
};

const FoodContext = createContext<FoodContextValues>(
  {} as FoodContextValues
);

export const FoodProvider: React.FC<FoodProviderProps> = ({
  children,
}) => {
  const [allFood, setAllFood] = useState<FoodRow[]>([]);
  const [clearInput, setClearInput] = useState<boolean>(false);
  const { data: queryFood } = useQuery<FoodRow[]>(
    "food",
    getFood
  );
  useEffect(() => {
    setAllFood(queryFood as FoodRow[]);
  }, [queryFood]);
  return (
    <FoodContext.Provider value={{ clearInput, setClearInput, allFood, setAllFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = (): FoodContextValues => {
  const { clearInput, setClearInput, allFood, setAllFood } = useContext(FoodContext);

  return {
    clearInput,
    setClearInput,
    allFood,
    setAllFood,
  };
};
