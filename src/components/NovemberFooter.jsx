import NovemberIconWhite from '@/assets/november-white.svg'
import NovemberIconBlack from '@/assets/november.svg'
import Link from 'next/link';
import Image from 'next/image';


function NovemberFooter(props){
    return (
        <Link href='https://november.team' className={`${props.dark ? 'bg-black text-white' : 'bg-white text-black'}  flex justify-center items-center gap-3 w-full border-y `}>
            <h1 className={`${props.dark ? 'border-white' : 'border-black'} font-serif border-r pr-3 text-[14px]`}>Designed and builded by</h1>
            <Image alt='logo' height={50} width={50} src={props.dark ? NovemberIconWhite : NovemberIconBlack} className='h-14 w-14'/>
        </Link>
    );
}

export default NovemberFooter;