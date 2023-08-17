import Navbar from "@/components/Navbar";
import { IoTrash } from "react-icons/io5";
import { AuthenticateUser } from "./add/product";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";

const User =()=>{
    return(
        <li className="bg-helper2 shadow-sm flex justify-between rounded-lg ">
            <div className="flex justify-between px-4 py-2 w-full items-center">
                <span className="font-medium">Milad</span>
                <span className="text-gray-600 text-[11px] md:text-[15px]">JJmmilad@protonmail.com</span>
            </div>
            <button className="h-full px-4 bg-red-500 rounded-r-lg hover:opacity-80 active:opacity-50 group">
                <IoTrash style={{color:'white'}} className="h-5 w-5 group-active:scale-90 transition-all"/>
            </button>
        </li>
    )
}

function Users() {
    //authentication
    const router = useRouter()
    const user = auth.currentUser
    AuthenticateUser(user, router)
    //end of authentication

    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Users</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <ul className="flex flex-col gap-4">
                            <User/>
                            <User/>
                            <User/>
                            <User/>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Users;

