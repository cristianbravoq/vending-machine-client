interface PurchaseInfoProps {
  montoTotal: number;
  monedasIngresadas: number;
  cambio: number;
}

const PurchaseInfo: React.FC<PurchaseInfoProps> = ({ montoTotal, monedasIngresadas, cambio }) => {
  return (
    <div className="my-5">
      {/* Monto Total */}
      <div className="text-center text-lg font-semibold mt-4">
        Total Amount: {montoTotal.toLocaleString("es", { style: "currency", currency: "USD" })}
      </div>

      {/* Monedas Ingresadas y Cambio */}
      <div className="mt-4">
        <p>Coins Inserted: {monedasIngresadas.toLocaleString("es", { style: "currency", currency: "USD" })}</p>
        <p>Remaining Coins: {cambio.toLocaleString("es", { style: "currency", currency: "USD" })}</p>
      </div>
    </div>
  );
};

export default PurchaseInfo;