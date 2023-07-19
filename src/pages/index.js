import IndexBrandsDiv from "@/components/IndexBrandsDiv";
import IndexPostsDiv from "@/components/IndexPostsDiv";
import PopularProductsDiv from "@/components/PopularProductsDiv";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="index-bg h-[250px]">
        <IndexBrandsDiv/>
        <IndexPostsDiv/>
      </div>

      <div className="mt-20 container mx-auto py-5 px-4">
        <PopularProductsDiv/>
      </div>

      <div className="container mx-auto px-4 py-4">
        <h1 className="font-semibold text-[20px]">All Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4">
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
          <Link  href='/products/1' style={{minHeight:200}} className="col-span-1 h-[270px] md:h-[300px] bg-helpe r2 border rounded-xl"></Link>
        </div>

      </div>
    </div>
  )
}
