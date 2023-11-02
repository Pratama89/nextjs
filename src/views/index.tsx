/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"



const ProductView = ({ products }: { products: ProductType[] }) => {
  console.log(products);
    return (
      <div className='w-full p-5 mb-5'> 
        <h1 className="text-2xl font-bold mt-5 text-center  ">Product</h1>
          <div className="flex flex-wrap mx-auto px-6 justify-start mt-5 mb-5 overflow-hidden"> 
                    
            {products.map((product: ProductType) => (              
              <div key={product.id} className="rounded-lg mb-5 w-60 mx-2">
                <img src={product.image} alt={product.name} className=" w-64 h-64 rounded-lg shadow-lg " />
                  <div className="px-4 py-4">
                    <h4 className="font-bold text-lg">{product.name}</h4>
                    <p className="font-bold text-sm">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="">Stok: {product.stock}</p>                    
                  </div>                    
              </div>
            ))}
          </div>
      </div>

      
      
    )
}

export default ProductView