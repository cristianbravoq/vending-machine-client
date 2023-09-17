import { useSaleContext } from "@contexts/index";
import { useEffect } from "react";

const PurchaseInfo: React.FC = () => {
  const { stateSale } = useSaleContext();
  useEffect(() => console.log(stateSale), [stateSale]);

  return (
    <div className="my-5">
      {/* Monto Total */}
      <div className="text-center text-lg font-semibold mt-4">
        Price product selected: {stateSale.stateSale.PriceProduct.toLocaleString("es", { style: "currency", currency: "USD" })}
      </div>

      {/* Monedas Ingresadas y Cambio */}
      <div className="mt-4">
        <p>Coins Inserted: {stateSale.stateSale.CoinsInserted.toLocaleString("es", { style: "currency", currency: "USD" })}</p>
        <p>Remaining Coins: {stateSale.stateSale.RemainingCoins.toLocaleString("es", { style: "currency", currency: "USD" })}</p>
      </div>
    </div>
  );
};

export default PurchaseInfo;