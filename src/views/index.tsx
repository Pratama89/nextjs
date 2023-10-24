/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"


const ProductView = ({ products }: { products: ProductType[] }) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-red-600'>
        <h1 className="text-2xl font-bold mt-5 text-center">Product</h1>
        <div className="flex justify-center text-center mt-5">
            {products.map((product: ProductType) => (
                <div key={product.id} className="flex flex-col  ">
                    <div className="">
                        <img src={product.image} alt={product.name} width="300" height="300" />
                    </div>
                    <h4 className="mt-5 font-bold text-2xl">{product.name}</h4>
                    <p className="">Harga: {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="">Stok: {product.stock}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ProductView