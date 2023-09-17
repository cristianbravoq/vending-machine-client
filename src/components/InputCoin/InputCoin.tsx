import { IStateSale, useSaleContext } from "@contexts/index";
import { Coin } from "@models/coin.model";
import { IDataStateSale } from "@models/stateSale.model";
import {
  getAllCoins,
  insertCoins,
  resetInsertedCoins,
  returnInsertedCoins,
} from "@services/Coins.service";
import { saleProducts } from "@services/Products.service";
import { useState, useEffect } from "react";

export const InputCoin = () => {
  const { updateStateSale, stateSale } = useSaleContext();
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await getAllCoins();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  const handleInputCoin = async (value: number) => {
    const { ProductId, PriceProduct, CoinsInserted, RemainingCoins } =
      stateSale.stateSale;

    if (CoinsInserted >= PriceProduct) {
      await saleProducts(ProductId);

      if (RemainingCoins > 0) {
        const responseReturnCoin = await returnInsertedCoins();
        console.log(responseReturnCoin);
      }
      await resetInsertedCoins();
    }

    const CoinInserted = await insertCoins(value);

    const updatedSaleData: IStateSale<IDataStateSale> = {
      stateSale: {
        ProductId,
        PriceProduct,
        TotalAmount: stateSale.stateSale.TotalAmount,
        CoinsInserted: CoinInserted,
        RemainingCoins: CoinInserted - PriceProduct,
      },
    };

    updateStateSale(updatedSaleData);
  };

  return (
    <div className="flex flex-wrap gap-5 w-full justify-center">
      <span>Click on the coin you want to insert.</span>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {coins.map((coin) => (
          <button
            onClick={() => handleInputCoin(parseFloat(coin.value))}
            key={coin.id}
            className="bg-pastel-one p-2 rounded-md shadow-md w-min"
          >
            <h2 className="text-slate-900 text-sm font-semibold">
              {`$${parseFloat(coin.value).toFixed(2)}`}
            </h2>
          </button>
        ))}
      </div>
    </div>
  );
};