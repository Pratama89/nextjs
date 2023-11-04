import { ProductType } from "@/types/product.type"
import ProductView from "@/views"

const ProductPage = (props: { products: ProductType[] }) => {
    const { products } = props    
    return (
        <div>
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;

export async function getStaticProps() {
    // fetch data
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json()
    // console.log(response)

    return {
        props: {
            products: response.data
        }
    }
}