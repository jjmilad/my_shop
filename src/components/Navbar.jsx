import { Yellowtail } from 'next/font/google'
const font = Yellowtail({
    subsets: ['latin'],
    weight: '400',
})

import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';


function Navbar() {
    return (
        <>
            <nav className='sticky w-full navbar top-0 md:py-2 border-b border-[rgba(209, 213, 219, 0.3)] py-2.5 px-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <Link href='/' className={font.className+' font-medium text-primary w-[20%] text-[25px] md:text-[33px]'}>Takimaster</Link>
                    <div className='w-[50%]'>
                        <input className='hidden md:flex rounded-xl border py-[11px] px-5 w-full outline-none shadow-lg text-[14px]' placeholder='Search any term you like'/>
                    </div>
                    <div className='w-[20%] flex justify-end gap-4 items-center'>
                        <p className='text-black text-[15px] hidden md:flex'>Home</p>
                        <p className='text-black text-[15px] hidden md:flex'>About</p>
                        <p className='text-black text-[15px] hidden md:flex'>Contact</p>
                        <button className='flex md:hidden'><IoMenu style={{color:'black'}} className='w-[30px] h-[28px]'/></button>
                    </div>
                </div>
                <div className='flex md:hidden container mx-auto pt-1'>
                    <input className='rounded-full mx-2 border py-[7px] px-5  w-full outline-none shadow-lg text-[15px]' placeholder='Search any term you like'/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;