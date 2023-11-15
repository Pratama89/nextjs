/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"
import Link from "next/link";



const ProductView = ({ products }: { products: ProductType[] }) => {
  console.log(products);
    return (
      <div className='w-full p-5 mb-5'> 
        <h1 className="text-2xl font-bold mt-5 text-center  ">Product</h1>
          <div className="flex flex-wrap mx-auto lg:px-6 px-2 justify-evenly lg:justify-start md:justify-start mt-5 mb-5 border bg-slate-100 rounded-lg overflow-hidden"> 
          {products?.length > 0 ? (
            <>
              {products?.map((product: ProductType) => (              
              <Link 
              href={`/product/${product.id}`}
              key={product.id} 
              className="flex flex-col items-start rounded-lg mt-3 mb-3 lg:w-60 w-36 border bg-white  mx-2 ">
                {/* <img src={product.image} alt={product.name} className=" w-36 h-36 lg:w-60 lg:h-60 rounded-lg shadow-lg " /> */}
                <Image src={product.image} alt={product.name} width={300} height={300} className=" w-36 h-36 lg:w-60 lg:h-60 rounded-lg shadow-lg " />
                  <div className="px-2 py-2 ">
                    <h4 className="font-bold text-xs md:text-xs lg:text-lg">{product.name}</h4>
                    <p className="font-bold text-xs md:text-xs lg:text-lg">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="text-xs md:text-xs lg:text-lg">Stok: {product.stock}</p>                    
                  </div>                    
              </Link>
            ))}
            </>
          ) : (
            <div className="w-1/4 p-3 animate-pulse">
              <div className="w-full aspect-square rounded-sm bg-slate-400" />
              <div className="w-full h-5 mt-1 bg-slate-400 rounded-sm" />
              <div className="w-full h-4 mt-1 bg-slate-400 rounded-sm" />
              <div className="w-full h-4 mt-2 bg-slate-400 rounded-sm" />
            </div>            
          )}

            
          </div>
      </div>

      
      
    )
}

export default ProductView