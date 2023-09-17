interface Props {
    image: string;
    alt: string;
    name: string;
    price: string;
}

export const Product = ({ image, alt, name, price }: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-pastel-four transition duration-300 ease-in-out">
            <img src={image} alt={alt} className="w-32 h-32 object-cover mb-2" />
            <span className="text-pastel-two font-semibold">{name}</span>
            <span className="text-pastel-two font-semibold">{Number(price).toLocaleString("es", {
                style: "currency",
                currency: "USD",
            })}</span>
        </div>
    )
}