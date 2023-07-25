import IndexBrandsDiv from "@/components/IndexBrandsDiv";
import IndexPostsDiv from "@/components/IndexPostsDiv";
import PopularProductsDiv from "@/components/PopularProductsDiv";
import ProductsList from "@/components/ProductsList";
import { IoSearch } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="index-bg h-[320px]">
        <div className='flex justify-center items-center container mx-auto md:w-[70%] relative px-6'>
            <div className="absolute right-6 md:right-0 bg-primary md:py-[8px] py-[9px] rounded-r-full md:rounded-r-xl px-4 top-[50%] translate-y-[-37%]">
              <IoSearch className="w-7 h-7 md:w-8 md:h-8 fill-white"/>
            </div>
            <input className='rounded-full md:rounded-xl mt-5 mb-2 border py-[10px] md:py-[11px] px-5  w-full outline-none shadow-lg  ' placeholder='Search any term you like'/>
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
