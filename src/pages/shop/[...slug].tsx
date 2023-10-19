import { useRouter } from "next/router"

const ShopPage = () => {
    const { query } = useRouter()
    // console.log(query)
    return (
        <div className='text-2xl font-bold text-center mt-5'>
            <div>Selamat Datang Di Shop Page</div>
            <p>Halaman Detail: 
                {`${query.slug && query.slug[0] +  
                " - " + query.slug[1] +  
                " - " + query.slug[2]}`}</p>
        </div>
    )
}

export default ShopPage