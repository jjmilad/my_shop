import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { IoAdd, IoReturnDownForward } from "react-icons/io5";
import { auth, firestore } from "../../../firebase";
import { useRouter } from "next/navigation";
import { AuthenticateUser } from "../users";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

function Product() {
    //authentication
    const router = useRouter()
    const user = auth.currentUser
    AuthenticateUser(user, router, false)
    //end of authentication

    const [message, setMessage] = useState()

    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [unit, setUnit] = useState()
    const [boughtPrice, setBoughtPrice] = useState()
    const [profit, setProfit] = useState()

    const addProduct = async(e)=>{
    if(name && quantity && boughtPrice && profit){
        const ref = collection(firestore, 'products')
        const result = await addDoc(ref,{
            name: name,
            quantity: quantity,
            unit: unit ? unit : '',
            boughtPrice: boughtPrice,
            profit: profit,
            analytics:{
                itemSold: 0,
                totalProfitMade: 0
            }
        })
        if(result.id){
            const newProductRef = doc(firestore, 'products', result.id)
            await updateDoc(newProductRef,{
                id: result.id
            })
            setMessage(`Produkt erfolgreich mit der ID hinzugefügt ${result.id}`)
        }
    }
    else{
        setMessage('Error, bitte versuchen Sie es später noch einmal')
    }
    }


    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y h-full w-full p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Produkt hinzufügen</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <div className="flex flex-col gap-6">
                            <Input type='text' label='Name' placeholder='Product Name' setValue={setName}/>
                            <Input type='number' label='Menge'  placeholder='1,2,3,4,5...' setValue={setQuantity}/>
                            <Input type='text' label='Maßeinheit' placeholder='Kg, L, g, Watt' setValue={setUnit}/>
                            <Input type='number' label='Kaufpreis' placeholder='Product Original Price' setValue={setBoughtPrice}/>
                            <Input type='number' label='profitieren' placeholder='Original Price + Profit = Product Price' setValue={setProfit}/>
                            <div className="flex gap-2 text-gray-600">
                                <IoReturnDownForward className="h-6 w-6"/> <span>{boughtPrice ? boughtPrice : 0} + {profit ? profit : 0} = {Number(boughtPrice) + Number(profit)}</span>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={addProduct} className="rounded-lg group w-full hover:opacity-80 active:opacity-50 py-2 flex items-center justify-center px-4 bg-primary shadow-sm">
                                <IoAdd style={{color:'white'}} className="h-8 w-8 group-active:scale-50 group-hover:scale-90"/>
                            </button>
                            <p className="py-4">{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;