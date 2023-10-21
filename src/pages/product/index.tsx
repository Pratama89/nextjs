import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type productType = {
    id: number
    name: string
    price: number
    stock: number    
};

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [products, setProducts] = useState([])
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
        <div className='text-2xl font-bold text-center mt-5'>
            <div>Selamat Datang Di Product</div>
            {products.map((product: productType) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    )
}

export default ProductPage