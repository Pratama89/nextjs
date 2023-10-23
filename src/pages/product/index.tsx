import ProductView from "@/views";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [products, setProducts] = useState([])
    console.log(products)
    const { push } = useRouter();
    
    useEffect(() => {
        if(!isLogin) {
            push('/auth/login')
        }
    }, []);

    useEffect(() => {
        fetch('/api/product')
        .then((res) => res.json())
        .then((response) => {
            setProducts(response.data)
        });
    }, []);

    return (
       <ProductView products={products}/>
    )
}

export default ProductPage