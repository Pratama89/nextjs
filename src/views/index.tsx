/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"


const ProductView = ({ products }: { products: ProductType[] }) => {
    return (
    <div className='w-full p-5 mb-5'> 
        <h1 className="text-2xl font-bold mt-5 text-center  ">Product</h1>
        <div className="flex w-screen mt-5 border border-red-600 min-h-cover relative"> 
            
            {products.map((product: ProductType) => (
                <div key={product.id} className="grid grid-cols-3 gap-3 items-center  border border-red-600 justify-center w-full">
                    <div className="rounded-md mt-5 mb-5">
                        <img src={product.image} alt={product.name} width={300} />
                    </div>
                    <h4 className="mt-5 font-bold text-2xl">{product.name}</h4>
                    <p className="font-bold mt-5">Harga: {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="mb-">Stok: {product.stock}</p>
                </div>
            ))}

        </div>
    </div>

    // <div className="bg-white ">
    //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    //     <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    //     <div className="flex mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    //       {products.map((product) => (
    //         <div key={product.id} className="group relative">
    //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
    //             <img
    //               src={product.image}
    //               alt={product.image}
    //               className="h-72 w-72 object-cover object-center lg:h-full lg:w-full"
    //             />
    //           </div>
    //           <div className="mt-4 flex justify-between">
    //             <div>
    //               <h3 className="text-sm text-gray-700">
    //                 <a href={product.name}>
    //                   <span aria-hidden="true" className="absolute inset-0" />
    //                   {product.name}
    //                 </a>
    //               </h3>
    //               <p className="mt-1 text-sm text-gray-500">{product.stock}</p>
    //             </div>
    //             <p className="text-sm font-medium text-gray-900">{product.price}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    )
}

export default ProductView