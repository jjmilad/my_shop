import { FcHome, FcShop, FcContacts, FcPrevious, FcAbout } from "react-icons/fc";

function MobileFooter() {
    return (
        <div className='sticky md:hidden bottom-0 w-full navbar border-t py-3 flex justify-between items-center px-4'>
            <FcPrevious className="h-7 w-7 hover:opacity-50 "/>
            <FcHome className="h-7 w-7 hover:opacity-50"/>
            <FcShop className="h-7 w-7 hover:opacity-50"/>
            <FcContacts className="h-7 w-7 hover:opacity-50"/>
            <FcAbout className="h-7 w-7 hover:opacity-50"/>
        </div>
    );
}

export default MobileFooter;