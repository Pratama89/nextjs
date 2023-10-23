
type ProductType = {
    id: number
    name: string
    price: number
    stock: number
    image: string
}
const ProductView = ({ products }: { products: ProductType[] }) => {
    return (
        <div className='text-2xl font-bold text-center mt-5'>
        <div>Selamat Datang Di Product</div>
        {products.map((product: ProductType) => (
            <div key={product.id}>{product.name}</div>
        ))}
    </div>
    )
}

export default ProductView