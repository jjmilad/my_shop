import Image from "next/image";
import Link from "next/link";

function Product(){
    return(
        <Link  href='/products/1' style={{minHeight:200}} className="col-span-1">
            <Image src='/product.webp' height={200} width={200} className="w-full"/>
            <div className="pt-4">
                <h1 className="text-[17px] font-normal leading-3 font-serif">Nike Firday 192</h1>
                <span className="text-[12px] font-serif">Nike</span>
                <p className="text-[16px] pt-1.5"><span className="line-through text-[#4b4b4b]">110₺</span> <span className="text-primary">99₺</span></p>
            </div>
        </Link>
    )
}


function ProductsList() {
    return (
        <div className="container mx-auto px-4 py-4">
        <h1 className="font-semibold text-[20px]">All Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-8 pt-4">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
        <div className="pt-20 pb-10 flex justify-center items-center">
            <div className="animate-spin w-11 h-11 bg-primary rounded-2xl flex justify-center items-center">
                <div className="w-[72%] h-[72%] rounded-full bg-white "></div>
            </div>
        </div>
      </div>
    );
}

export default ProductsList;