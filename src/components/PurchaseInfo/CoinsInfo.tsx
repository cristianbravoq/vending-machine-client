import { useSaleContext } from "@contexts/index";
import { Coin } from "@models/coin.model";
import { getAllCoins } from "@services/index";
import { useEffect, useState } from "react";

const CoinsInfo: React.FC = () => {
  const { stateSale } = useSaleContext();
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    getAllCoins()
      .then((data) => {
        setCoins(data)
      })
      .catch((error) => {
        console.error('Error al obtener los items:', error);
      });
  }, [stateSale]);

  return (
    <div className="flex flex-wrap gap-1">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="bg-pastel-one p-2 rounded-md shadow-md w-min"
        >
          <h2 className="text-slate-900 text-sm font-semibold">
            {`$${parseFloat(coin.value).toFixed(2)}`}
          </h2>
          <p className="text-slate-900 text-xs">Quantity: {coin.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CoinsInfo;