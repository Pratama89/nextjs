import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router"
import useSWR from "swr";
import DetailProduct from "../detail_product";

const DetailProductPage = () => {
    const { query } = useRouter()

    const { data, error, isLoading } = useSWR(
        `/api/product/${query.id}`,
        fetcher
      );

    console.log(data);

    return (
        <div className='text-2xl font-bold text-center mt-5'>
            <div>Detail Product</div>
            <div className="flex justify-center">
            <DetailProduct product={isLoading ? [] : data.data}/>
            </div>
        </div>
    )
}

export default DetailProductPage