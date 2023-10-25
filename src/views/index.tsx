/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"


const ProductView = ({ products }: { products: ProductType[] }) => {
    return (
    <div className='w-screen h-96 p-5 mb-5  '> 
        <h1 className="text-2xl font-bold mt-5 text-center">Product</h1>
        <div className="flex justify-center mt-5 border border-red-600  bg-red-500 min-h-cover"> 
            <div className="px-8 mx-5 container border border-red-500">
                KOTAK
            </div>
            {/* {products.map((product: ProductType) => (
                <div key={product.id} className="px-8 mr-5">
                    <div className="rounded-md w-40 h-40">
                        <img src={product.image} alt={product.name}  />
                    </div>
                    <h4 className="mt-5 font-bold text-xl">{product.name}</h4>
                    <p className="">Harga: {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="mb-">Stok: {product.stock}</p>
                </div>
            ))} */}
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