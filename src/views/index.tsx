/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"


const ProductView = ({ products }: { products: ProductType[] }) => {
    return (
        // style.product
    <div className='w-full p-0.5 container'> 
        {/* product_title */}
        <h1 className="text-2xl font-bold mt-5 text-center">Product</h1>
        {/* product_content */}
        <div className="flex mt-5">
            {products.map((product: ProductType) => (
                // product_content_item
                <div key={product.id} className="w-1/4 p-3">
                    {/* product_content_item_image */}
                    <div className="">
                        <img src={product.image} alt={product.name} width="300" height="300" />
                    </div>
                    {/* product_content_item_name */}
                    <h4 className="mt-5 font-bold text-2xl">{product.name}</h4>
                    {/* product_content_item_price */}
                    <p className="">Harga: {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    {/* product_content_item_stock */}
                    <p className="">Stok: {product.stock}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ProductView