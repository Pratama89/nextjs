import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router"
import DetailProduct from "../../views/detail_product";
import { ProductType } from "@/types/product.type";

const DetailProductPage = ( {product}: {product: ProductType}) => {
    const { query } = useRouter()

    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.id}`,
    //     fetcher
    //   );

    // console.log(data);

    return (
        <div className='text-2xl font-bold text-center mt-5'>
            {/* clientsite */}
            <div className="flex flex-col items-center">
            {/* <DetailProduct product={isLoading ? {} : data.data}/> */}
            {/* Server Site  & Static Site */}
            <DetailProduct product={product} />
            </div>
        </div>
    )
}

export default DetailProductPage

// dipanggil setiap melakukan request
export async function getServerSideProps({ 
    params, 
}: {
    params: {id: string}
}) {
    // console.log(params.product);
    // fetch data
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.id}`)
    const response = await res.json()
    console.log(response)

    return {
        props: {
            product: response.data
        }
    }
}

// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/api/product');
//     const response = await res.json();

//     const paths = response.data.map((product: ProductType) => ({
//         params: {
//             id: product.id.toString(),
//         },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };

// }


// export async function getStaticProps({ 
//     params, 
// }: {
//     params: {id: string}
// }) {
//     // console.log(params.product);
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
//     const response = await res.json()
//     // console.log(response)

//     return {
//         props: {
//             product: response.data
//         }
//     }
// }