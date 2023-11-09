/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"

const DetailProduct = ({ product }: { product: ProductType }) => {
    return (
        <>
        <div className="text-2xl font-bold text-center">Detail Product</div>
        <div              
            className="flex flex-col items-center rounded-lg mt-3 mb-3 lg:w-60 w-36 border bg-white  mx-2 ">
            <img src={product.image} alt={product.name} className=" w-36 h-36 lg:w-60 lg:h-60 rounded-lg shadow-lg " />
            <div className="px-2 py-2  ">
                <h4 className="font-bold text-xs md:text-xs lg:text-lg">{product.name}</h4>
                <p className="font-bold text-xs md:text-xs lg:text-lg">{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                <p className="text-xs md:text-xs lg:text-lg">Stok: {product.stock}</p>                    
            </div>                    
        </div>
        </>
    )
}

export default DetailProduct