import Image from "next/image";

function Product() {
    return (
        <div className='flex bg-n navbar m-10 border container mx-auto w-full'>
          <div className="md:w-[40%] bg-red-200">
            <Image src='/3.webp' height={500} width={500} className="w-full"/>
          </div>

        </div>
    );
}

export default Product;