import Image from "next/image";
import { useState } from "react";

function Product() {
  const images = {
    img1: 'https://cdn.dsmcdn.com/ty851/product/media/images/20230427/7/333235206/918932827/1/1_org_zoom.jpg',
    img2: 'https://cdn.dsmcdn.com/ty851/product/media/images/20230427/7/333235206/918932827/2/2_org_zoom.jpg',
    img3: 'https://cdn.dsmcdn.com/ty850/product/media/images/20230427/7/333235206/918932827/3/3_org_zoom.jpg',
    img4: 'https://i.pinimg.com/736x/ba/07/7d/ba077d18a7a7862a67653fa0e252ac60--nike-phone-cases-samsung-galaxy-cases.jpg'
  }
  const [mainImage, setMainImage] = useState(images.img1)
    return (
      <div className="flex flex-col justify-between lg:flex-row md:gap-14 lg:items-start container mx-auto min-h-screen md:pt-8">
        <div className="flex flex-col md:gap-2 lg:w-2/4">
          <img src={mainImage} alt='' className="w-full h-full aspect-square object-cover"/>
          <div className="flex flex-row justi fy-between gap-x-2 bg-secondary sm:bg-white px-2 md:px-0 overflow-x-scroll w-full py-2">
            <Image width={100} height={128} src={images.img1} alt='' className={` ${ mainImage === images.img1 ? 'border-2 border-primary ' : ''} product-sm-img w-[100px] object-center object-cover h-32 cursor-pointer`} onClick={()=>setMainImage(images.img1)}/>
            <Image width={100} height={128} src={images.img3} alt='' className={` ${ mainImage === images.img3 ? 'border-2 border-primary ' : ''} product-sm-img w-[100px] object-center object-cover h-32 cursor-pointer`} onClick={()=>setMainImage(images.img3)}/>
            <Image width={100} height={128} src={images.img4} alt='' className={` ${ mainImage === images.img4 ? 'border-2 border-primary ' : ''} product-sm-img w-[100px] object-center object-cover h-32 cursor-pointer`} onClick={()=>setMainImage(images.img4)}/>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-2/4 w-full">
        <div className="flex shadow-md sm:shadow-none py-6 bg-secondary sm:bg-white flex-col gap-4 md:p-0 px-4">
          <div className="">
            <span className="text-primary font-semibold">Nike v-234 </span>
            <h1 className="text-3xl md:text-[50px] md:mt-2 font-bold">Nike invincible</h1>
          </div>
          <h6 className="text-2xl font-semibold">$ 199.99</h6>
          <div className="w-auto">
            <button className="rounded-full px-4 py-1.5 text-[13px] bg-blue  text-white w-auto">Clothing</button>
          </div>
          <p className="text-gray-600 text-[15px] md:text-[16px]">
            this is a really great produc t spaces of the utf and javasriot with the gol ife pertier and ofcourse the new amter which was.
          </p>
          <div className="">
            <button className="bg-primary shadow-md text-white font-semibold w-full md:w-auto py-3 px-16 rounded-xl">See in the trendyol</button>
          </div>
        </div>
        <div className="product-div sm:bg-white h-96 px-4 py-6 bg-secondary w-full md:border md:p-6 ">
          asdfasfd
        </div>
        </div>
      </div>
    );
}

export default Product;