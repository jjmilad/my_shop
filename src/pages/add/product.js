import SubmitButton from "@/components/Button";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { IoAdd, IoReturnDownForward } from "react-icons/io5";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

function CustomField(){
    return(
        <div className="flex gap-4 w-full">
            <div className="w-[40%]">
                <Input placeholder='Name'/>
            </div>
            <div className="w-[60%]">
                <Input placeholder='Value'/>
            </div>
        </div>
    )
}

export async function AuthenticateUser(user, router){
    if(user){
        const userRef = doc(firestore, 'users', user.uid)
        const userData = await getDoc(userRef)
        if(userData.exists()){
            if(!userData.data().isAdmin){
                router.push('/')
            }
        }
    }
    else{
        router.push('/')
    }
}

function Product() {
    //authentication
    const router = useRouter()
    const user = auth.currentUser
    AuthenticateUser(user, router)
    //end of authentication

    const [customFieldData, setCustomFieldData] = useState()
    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y h-full w-full p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Add A Product</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <div className="flex flex-col gap-6">
                            <Input type='text' label='Name' placeholder='Product Name'/>
                            <Input type='number' label='Quantity'  placeholder='1,2,3,4,5...'/>
                            <Input type='text' label='Unit' placeholder='Kg, L, g, Watt'/>
                            <Input type='number' label='Bought Price' placeholder='Product Original Price'/>
                            <Input type='number' label='Profit' placeholder='Original Price + Profit = Product Price'/>
                            <div className="flex gap-2 text-gray-600">
                                <IoReturnDownForward className="h-6 w-6"/> <span>102 + 322 = 200</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 items-center justify-between">
                                <span className="font-semibold text-[14px] rounded-lg px-4 bg-helper py-2 w-full">Dynamic Fields</span>
                                <button className="rounded-lg py-2 px-4 bg-helper shadow-sm active:opacity-50 hover:opacity-80">
                                    <IoAdd className="h-5 w-5"/>
                                </button>
                            </div>
                            {
                                <CustomField/>
                            }
                        </div>
                    </div>
                    <SubmitButton text='Add'/>
                </div>
            </div>
        </main>
    );
}

export default Product;