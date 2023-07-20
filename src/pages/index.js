import IndexBrandsDiv from "@/components/IndexBrandsDiv";
import IndexPostsDiv from "@/components/IndexPostsDiv";
import PopularProductsDiv from "@/components/PopularProductsDiv";
import ProductsList from "@/components/ProductsList";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="index-bg h-[250px]">
        <IndexBrandsDiv/>
        <IndexPostsDiv/>
      </div>

      <div className="mt-20 container mx-auto py-5">
        <PopularProductsDiv/>
        <ProductsList/>
      </div>
    </div>
  )
}
