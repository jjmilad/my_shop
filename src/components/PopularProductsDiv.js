import Image from "next/image";

function PopularProduct(props){
    return(
        <div style={{minWidth:200}} className="w-[210px] h-[350px] group cursor-pointer">
            <div className="relative">
                <Image src={'/3.webp'} height={100} width={210} className="object-cover w-[210px] h-[250px]"/>
                <div className="bottom-0 top-0 right-0 left-0 absolute hover:image "></div>
            </div>
            <div className="pt-4">
                <h1 className="text-[17px] font-normal leading-3 font-serif">Nike Firday 192</h1>
                <span className="text-[12px] font-serif">Nike</span>
                <p className="text-[16px] pt-1.5"><span className="line-through text-[#4b4b4b]">110₺</span> <span className="text-primary">99₺</span></p>
            </div>
        </div>
    )
}

function PopularProductsDiv() {
    return (
        <div>
            <h1 className="font-semibold text-[20px] px-4">Populor Products</h1>
            <div className="pt-4 overflow-x-auto flex gap-4 pb-4 px-4">
                <PopularProduct/>
                <PopularProduct/>
                <PopularProduct/>
                <PopularProduct/>
                <PopularProduct/>
                <PopularProduct/>
                <PopularProduct/>
                <PopularProduct/>
            </div>
        </div>
    );
}

export default PopularProductsDiv;