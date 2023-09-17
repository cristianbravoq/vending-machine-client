import { useEffect } from "react";
import { useSaleContext } from "@contexts/StateSaleContext";
import { getAllItems } from "@services/Products.service";

import { Product } from "@components/Product";
import CoinsInfo from "@components/PurchaseInfo/CoinsInfo";
import PurchaseInfo from "@components/PurchaseInfo/PurchaseInfo";
import { InputCoin } from "@components/InputCoin/InputCoin";
import { Modal } from "@components/Modal";

function Start() {
  const { dataProducts, updateDataProducts } = useSaleContext();
  const imageBaseUrl = "src/assets/"; // Ruta base de las imágenes relativas

  useEffect(() => {
    getAllItems()
      .then((data) => {
        updateDataProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener los items:', error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 w-screen">

      {/* Header */}
      <div className="bg-gradient-to-r from-pastel-three to-pastel-four absolute w-full top-0 p-3 text-right text-black text-2xl font-semibold rounded-b-lg">
        Available products
      </div>

      {/* Product Display */}
      <div className="grid grid-cols-3 gap-4 mt-16 max-h-80 overflow-y-scroll mx-4">
        {dataProducts.length > 1 && dataProducts.map((product) => (
          <div className="border-none p-0 bg-white hover:border-none">
            <Product key={product.id} image={imageBaseUrl + product.name.toLowerCase() + ".png"} alt={product.name} name={product.name} price={product.price.toString()} />
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-around h-12 mx-5 mt-auto">
        <button className="bg-pastel-six w-full text-white font-semibold p-2 rounded-md mr-4 hover:opacity-80 transition duration-300 ease-in-out">
          Buy now
        </button>
        <button className="w-full text-white font-semibold p-2 rounded-md hover:opacity-80 transition duration-300 ease-in-out">
          Go back
        </button>
      </div>

      {/* Useful information */}
      <div className="px-6 mx-auto py-4 bg-gradient-to-r from-pastel-four to-pastel-three text-black rounded-lg shadow-lg">
        <div className="font-semibold text-lg">Purchase Information</div>
        <PurchaseInfo montoTotal={0} monedasIngresadas={0} cambio={0} />
        <CoinsInfo />
      </div>

      <div className="fixed top-2 left-2 border-2 border-black rounded-md">
        <Modal Component={<InputCoin />} TextClose={'Cerrar'} TextOpen={'Insert coins'} />
      </div>

    </div>
  );
}

export default Start;