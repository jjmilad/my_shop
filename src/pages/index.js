import IndexBrandsDiv from "@/components/IndexBrandsDiv";
import IndexPostsDiv from "@/components/IndexPostsDiv";
import PopularProductsDiv from "@/components/PopularProductsDiv";
import ProductsList from "@/components/ProductsList";
import { IoSearch } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="index-bg h-[320px]">
        <div className='flex container mx-auto md:w-[70%] pt-5 pb-1 px-6 justify-center items-center'>
            <input className='rounded-l-full rounded-r-none  md:rounded-l-xl border py-[10px] md:py-[11px] px-5  w-full outline-none shadow-lg  ' placeholder='Search any term you like'/>
            <div className="bg-primary md:py-[8px] py-[9px] rounded-r-full md:rounded-r-xl px-4 shadow-lg">
              <IoSearch className="w-7 h-7 md:w-8 md:h-8 fill-white"/>
            </div>
        </div>
        <IndexBrandsDiv/>
        <IndexPostsDiv/>
      </div>

      <div className="mt-24 container mx-auto py-5">
        <PopularProductsDiv/>
        <ProductsList/>
      </div>
    </div>
  )
}
