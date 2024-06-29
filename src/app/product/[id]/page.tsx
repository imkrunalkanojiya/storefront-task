import SingleProducrDetails from "@/components/SingleProductDetails/SingleProductDetails"

const Page = async ({ params }: any) => {

    const { id } = params;
    // Get All the Products
    const productDetails = await getSingleProduct(id);
    return (
        <SingleProducrDetails singleProductDetails={productDetails} />
    )
}

async function getSingleProduct(id: number) {
    const res: any = await fetch(`${process.env.API_URL}/products/${id}`)
    if (!res?.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default Page