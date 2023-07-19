import Image from "next/image";

function IndexBrand() {
    return (
        <div className="flex items-center group flex-col font-bold">
            <div style={{minHeight:68, minWidth:68}} className="rounded-full md:shadow-none md:border transition-all group-hover:ring-2 ring-red-600 h-[68px] w-[68px] bg-[#f8f8f8] border flex items-center justify-center ">
                <Image src='/apple2.webp' height={40} width={40}/>
            </div>
            <p className="text-[#5d5d5d] group-hover:text-red-600 transition-all font-medium text-[11px] pt-1 md:text-[12px]">Takimaster</p>
        </div>
    );
}

function IndexBrandsDiv() {
    return (
        <div className="overflow-x-scroll container mx-auto flex md:gap-10 gap-7 pb-3 pt-4 md:pt-8 px-4">
            <IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/><IndexBrand/>
        </div>
    );
}

export default IndexBrandsDiv;