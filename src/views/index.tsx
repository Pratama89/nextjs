/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"



const ProductView = ({ products }: { products: ProductType[] }) => {
  console.log(products);
    return (
      <div className='w-full p-5 mb-5'> 
        <h1 className="text-2xl font-bold mt-5 text-center  ">Product</h1>
          <div className="flex flex-wrap mx-auto lg:px-6 px-2 justify-evenly lg:justify-start mt-5 mb-5 border border-red-500 overflow-hidden"> 

            <div className="w-">
              <div className="" />
              <div className="" />
              <div className="" />
              <div className="" />
            </div>

            {/* {products.map((product: ProductType) => (              
              <div key={product.id} className="flex flex-col items-center rounded-lg  mb-5 lg:w-60 w-36 border border-blue-500 mx-2 ">
                <img src={product.image} alt={product.name} className=" w-36 h-36 lg:w-60 lg:h-60 rounded-lg shadow-lg " />
                  <div className="px-2 py-2 border border-red-500">
                    <h4 className="font-bold text-xs md:text-sm lg:text-lg">{product.name}</h4>
                    <p className="font-bold text-xs md:text-sm lg:text-lg">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="text-xs md:text-sm lg:text-lg">Stok: {product.stock}</p>                    
                  </div>                    
              </div>
            ))} */}
          </div>
      </div>

      
      
    )
}

export default ProductView