import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false)
    const {push, query} = useRouter()
    useEffect(() => {
        if(!isLogin) {
            push('/auth/login')
        }
    }, [])
    return (
        <div className='text-2xl font-bold text-center mt-5'>
            <div>Selamat Datang Di Product</div>
        </div>
    )
}

export default ProductPage