import { useRouter } from "next/router"

const DetailProductPage = () => {
    const { query } = useRouter()
    return (
        <div className='text-2xl font-bold text-center mt-5'>
            <div>Selamat Datang Di Detail Product</div>
            <p>Halaman Detail: {query.id}</p>
        </div>
    )
}

export default DetailProductPage