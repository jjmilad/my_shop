import { IoHome, IoCart, IoStorefront } from "react-icons/io5";
import { FcHome, FcShop, FcContacts, FcPrevious, FcUpLeft, FcAbout } from "react-icons/fc";


function FooterItem(props){
    return(
        <div className='rounded-full h-10 w-10 bg-black'></div>
    )
}

function MobileFooter() {
    return (
        <div className='sticky md:hidden bottom-0 w-full navbar border-t py-3 flex justify-between items-center px-4'>
            <FcPrevious className="h-8 w-8 hover:opacity-50"/>
            <FcHome className="h-8 w-8 hover:opacity-50"/>
            <FcShop className="h-8 w-8 hover:opacity-50"/>
            <FcContacts className="h-8 w-8 hover:opacity-50"/>
            <FcAbout className="h-8 w-8 hover:opacity-50"/>
        </div>
    );
}

export default MobileFooter;