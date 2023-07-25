import Image from "next/image";

function Product() {
    return (
        <div className='flex bg-n navbar m-10 border container mx-auto w-full'>
          <div className="w-[50%] py-10 px-10 flex">
            <div className="flex flex-col gap-5">
              <Image src='/product.webp' height={100} width={150}/>
              <Image src='/product.webp' height={100} width={150}/>
              <Image src='/product.webp' height={100} width={150}/>
            </div>
            <Image src='/product.webp' height={500} width={500}/>
          </div>
          <div className="w-[50%] px-20 py-20">
            <h1 className="text-[30px] font-serif">Nike font 12</h1>
            <p className="text-[20px] font-serif">Nike</p>
            <p className="pt-5 text-[30px] font-serif"><span className="line-through">100</span> <span className="text-primary">99</span></p>
          </div>
        </div>
    );
}

export default Product;