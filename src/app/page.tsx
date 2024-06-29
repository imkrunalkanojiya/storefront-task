import ProductCards from "@/components/ProductCards/ProductCards";
import SearchBar from "@/components/SearchBar/SearchBar";

const Page = async () => {

  // Get All the Products
  const products = await getProducts();

  return (
    <div className="relative w-full flex justify-center">
      <div className="container py-8">
        <SearchBar products={products} />
        <ProductCards products={products} />
      </div>
    </div>
  )
}

async function getProducts() {
  const res: any = await fetch('https://fakestoreapi.com/products')
  if (!res?.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default Page