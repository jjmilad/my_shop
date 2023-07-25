import { Yellowtail } from 'next/font/google'
import Link from 'next/link';

const font = Yellowtail({
    subsets: ['latin'],
    weight: '400',
})


function Footer() {
    return (
        <footer className="bg-black px-4 pt-10 hidden md:flex">
            <div className="container mx-auto h-30 pb-5 border-b border-[#161616] grid grid-cols-3">
                <div className='col-span-1'>
                    <Link href='/' className={font.className+' font-medium text-white w-[20%] text-[25px] md:text-[40px] leading-8'}>Takimaster</Link>
                    <p className='text-white font-serif text-[14px] italic'>the best shop in the world</p>
                    <p className='text-white font-serif text-[14px] mt-7'>Address: theodor-huesss-str 74 altenkunstadt bayern</p>
                    <div className='flex gap-3 mt-2'>
                        <div className='bg-white rounded-lg h-9 w-9 shadow-inner shadow-gray-500'></div>
                        <div className='bg-white rounded-lg h-9 w-9 shadow-inner shadow-gray-500'></div>
                        <div className='bg-white rounded-lg h-9 w-9 shadow-inner shadow-gray-500'></div>
                        <div className='bg-white rounded-lg h-9 w-9 shadow-inner shadow-gray-500'></div>
                    </div>
                </div>


            </div>
        </footer>
    );
}

export default Footer;