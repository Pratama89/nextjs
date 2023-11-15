import ProductView from "@/views";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";


const ProductPage = () => {
    const [products, setProducts] = useState([])
    const { push } = useRouter();
    
    // useEffect(() => {
    //     push("/")
    // }, []);

    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
      );

      console.log(data);
      console.log(error);
      console.log(isLoading);

    // useEffect(() => {
    //     fetch('/api/product')
    //     .then((res) => res.json())
    //     .then((response) => {
    //         setProducts(response.data)
    //     });
    // }, []);

    return (
        <div className="" >
            <ProductView products={isLoading ? [] : data?.data} />
        </div>
    )
}

export default ProductPage