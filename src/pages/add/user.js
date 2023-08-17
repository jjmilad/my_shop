import SubmitButton from "@/components/Button";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { AuthenticateUser } from "./product";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase";

function User() {
    //authentication
    const router = useRouter()
    const user = auth.currentUser
    AuthenticateUser(user, router)
    //end of authentication
    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y h-full w-full p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Add A User</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <div className="flex flex-col gap-6">
                            <Input type='text' placeholder='Ahmad' label='Name'/>
                            <Input type='email' placeholder='ahmad@gmail.com' label='Email'/>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Input type='password' label='Password'/>
                            <Input type='password' label='Conform Password'/>
                        </div>
                    </div>
                    <SubmitButton text='Add'/>
                </div>
            </div>
        </main>
    );
}

export default User;