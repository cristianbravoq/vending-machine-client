import { IDataProduct, IDataStateSale } from "@models/index";
import { createContext, useContext, useState } from "react";

export interface IStateSale<T> {
  stateSale: T;
}

interface SaleContextState {
  stateSale: IStateSale<IDataStateSale>;
  dataProducts: IDataProduct[]; 
  updateStateSale: (nuevoGrupoDatos: IStateSale<IDataStateSale>) => void;
  resetStateSale: () => void;
  updateDataProducts: (dataProducts : IDataProduct[]) => void;
}

export const initialState = {
    stateSale: {
    TotalAmount: 0,
    CoinsInserted: 0,
    RemainingCoins: 0,
    ProductId: 0,
    PriceProduct: 0
  }
}

const DatosContext = createContext<SaleContextState>({
  stateSale: initialState,
  dataProducts: [],
  updateStateSale: () => { },
  resetStateSale: () => { },
  updateDataProducts: () => { },
});

const StateSalesProvider = ({ children }: Props) => {
  const [stateSale, setStateSale] = useState<IStateSale<IDataStateSale>>(initialState);
  const [dataProducts, setDataProducts] = useState<IDataProduct[]>([]);

  const updateStateSale = (nuevoDatosState: IStateSale<IDataStateSale>) => {
    setStateSale(nuevoDatosState);
  };

  const resetStateSale = () => {
    setStateSale(initialState);
  };

  const updateDataProducts = (dataProducts : IDataProduct[]) => {
    setDataProducts(dataProducts);
  }

  return (
    <DatosContext.Provider
      value={{ stateSale, dataProducts, updateStateSale, resetStateSale, updateDataProducts }}
    >
      {children}
    </DatosContext.Provider>
  );
};

const useSaleContext = () => useContext(DatosContext);

export { StateSalesProvider, useSaleContext };

interface Props {
  children: JSX.Element[] | JSX.Element;
}