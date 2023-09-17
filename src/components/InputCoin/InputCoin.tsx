import { Coin } from "@models/coin.model";
import { getAllCoins } from "@services/Coins.service";
import { useState, useEffect } from "react";

export const InputCoin = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    getAllCoins()
      .then((data) => {
        setCoins(data)
      })
      .catch((error) => {
        console.error('Error al obtener los items:', error);
      });
  }, []);

  const handlerInputCoin = (value: string) => {
    console.log(value);
  }

  return (
    <div className="flex flex-wrap gap-5 w-full justify-center">
      <span>Click on the coin you want to insert.</span>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {coins.map((coin) => (
          <button
            onClick={() => handlerInputCoin(coin.value)}
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
}