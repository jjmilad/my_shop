import { IoCloseCircle } from "react-icons/io5";
import Input from "./Input";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useState } from "react";
import Button from "./Button";

function DataFields(props){
    return(
        <div className="h-14 border whitespace-nowrap flex items-center rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all">
            <span className="h-full text-[13px] px-8 font-semibold bg-helper2 items-center flex rounded-l-md">{props.name}</span>
            <span className="pl-5 font-medium text-[18px]">{props.value}$</span>
        </div>
    )
}

function PopUp(props) {
    const [name, setName] = useState(props.data.name)
    const [quantity, setQuantity] = useState(props.data.quantity)
    const [unit, setUnit] = useState(props.data.unit)
    const [boughtPrice, setBoughtPrice] = useState(props.data.boughtPrice)
    const [profit, setProfit] = useState(props.data.profit)

    const [message, setMessage] = useState()

    const deleteProduct = async()=>{
        const productRef = doc(firestore, 'products', props.data.id)
        await deleteDoc(productRef)
        props.close()
    }

    const updateProduct = async()=>{
        const productRef = doc(firestore, 'products', props.data.id)
        await updateDoc(productRef,{
            name: name,
            quantity: quantity,
            unit: unit,
            boughtPrice: boughtPrice,
            profit: profit
        })
        setMessage('Produkt erfolgreich hinzugefügt')

    }

    return (
        <div className="">
            <div onClick={props.close} className="w-screen overflow-hidden transition-all h-screen bg-[#0000007d] fixed top-0 left-0 right-0 bottom-0"></div>
            <div className="bg-white shadow-xl w-[90%] h-[85%] top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] fixed rounded-lg overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-12 bg-helper text-black rounded-t-lg flex items-center justify-between px-6">
                    <button onClick={props.close}>
                        <IoCloseCircle  style={{color:'gray'}} className="h-8 w-8 hover:scale-105 transition-all hover:opacity-80"/>
                    </button>
                    <div>
                        <span className="ml-4 font-semibold text-gray-500 text-[12px]">[{props.data.id}]</span>
                    </div>
                </div>
                <div className="md:p-16 md:py-20 px-7 py-20  overflow-y-auto h-full">
                    <h1 className="text-[30px] md:text-[50px] font-semibold">{props.data.name}</h1>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-8 gap-4">
                        <DataFields name={'Items Sold'} value={props.data.analytics.itemSold}/>
                        <DataFields name={'Total Profit Made'} value={props.data.analytics.totalProfitMade}/>
                        <DataFields name={'Average Profit/Product'} value={props.data.analytics.totalProfitMade/props.data.analytics.itemSold}/>
                        <button onClick={deleteProduct} className={`rounded-lg hover:opacity-80 active:opacity-50 font-semibold text-[14px] h-14 px-8 text-white bg-red-500 shadow-md`}>Delete</button>
                    </div>

                    <div className="pt-14 flex flex-col md:flex-row justify-between w-full gap-4 md:gap-10">
                        <div className="flex flex-col gap-4 w-full">
                            <Input placeholder={'Name'} label='Name' value={name} setValue={setName}/>
                            <Input placeholder={'Quantity'} label='Quantity' value={quantity} setValue={setQuantity}/>
                            <Input placeholder={'Unit'} label='Unit' value={unit} setValue={setUnit}/>
                            <Input placeholder={'Bought Price'} label='Bought Price' value={boughtPrice} setValue={setBoughtPrice}/>
                            <Input placeholder={'Profit'} label='Profit' value={profit} setValue={setProfit}/>
                        </div>
                    </div>
                    <div className="pt-8">
                        <Button onClick={updateProduct} text='Edit'/>
                        <p className="py-4">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;