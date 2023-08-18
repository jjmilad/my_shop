import SubmitButton from "@/components/Button";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { AuthenticateUser } from "./product";
import { useRouter } from "next/navigation";
import { auth, firestore } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export const checkInput = (inputList)=>{
    inputList.forEach(item => {
        if(item && item !== undefined){
            return true
        }
        else{
            return false
        }
    });
    
}

function User() {
    //authentication
    const router = useRouter()
    AuthenticateUser(router)

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const [status, setStatus] = useState()

    const addUser = ()=>{
        if(!checkInput([email, name, password, confirmPassword])){
            setStatus(0)
        }
        else if(password === confirmPassword){
            setStatus(2)
        }
        else{
            const userRef = collection(firestore, 'users')
            addDoc()
            setStatus(1)
        }
    }

    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y h-full w-full p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Add A User</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <div className="flex flex-col gap-6">
                            <Input value={name} setValue={setName} type='text' placeholder='Ahmad' label='Name'/>
                            <Input value={email} setValue={setEmail} type='email' placeholder='ahmad@gmail.com' label='Email'/>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Input value={password} setValue={setPassword} type='password' label='Password'/>
                            <Input value={confirmPassword} setValue={setConfirmPassword} type='password' label='Confirm Password'/>
                        </div>
                    </div>
                    <SubmitButton text='Add'/>
                    <div className="py-4">
                        <span className="text-blue-500">{ status === 1 ? 'User Added Succesfully' : status === 2 ? 'Confirm password wrong' : status === 0 ? 'Error' : '' }</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default User;