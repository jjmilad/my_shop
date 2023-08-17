import { IoCloseCircle } from "react-icons/io5";
import Input from "./Input";
import SubmitButton from "./Button";

function DataFields(){
    return(
        <div className="h-14 border flex items-center rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all">
            <span className="h-full text-[15px] px-8 font-semibold bg-helper2 items-center flex rounded-l-md">Sale</span>
            <span className="pl-5 font-medium text-[18px]">120$</span>
        </div>
    )
}

function PopUp(props) {
    return (
        <div className="">
            <div onClick={props.close} className="w-screen overflow-hidden transition-all h-screen bg-[#0000007d] fixed top-0 left-0 right-0 bottom-0"></div>
            <div className="bg-white shadow-xl w-[90%] h-[85%] top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] fixed rounded-lg overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-12 bg-helper text-black rounded-t-lg flex items-center justify-between px-6">
                    <span className="text-[15px] font-semibold">Apple Air 32<span className="ml-4 font-semibold text-gray-500 text-[12px]">[12121]</span></span>
                    <button onClick={props.close}>
                        <IoCloseCircle  style={{color:'gray'}} className="h-8 w-8 hover:scale-105 transition-all hover:opacity-80"/>
                    </button>
                </div>
                <div className="md:p-16 md:py-20 px-7 py-20  overflow-y-auto h-full">
                    <h1 className="text-[30px] md:text-[50px] font-semibold">Apple Air 32</h1>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-8 gap-4">
                        <DataFields/>
                        <DataFields/>
                        <DataFields/>
                        <button className={`rounded-lg hover:opacity-80 active:opacity-50 font-semibold text-[14px] h-14 px-8 text-white bg-red-500 shadow-md`}>Delete</button>
                    </div>

                    <div className="pt-14 flex flex-col md:flex-row justify-between w-full gap-4 md:gap-10">
                        <div className="flex flex-col gap-4 w-full">
                            <Input placeholder={'Name'} label='Name'/>
                            <Input placeholder={'Quantity'} label='Quantity'/>
                            <Input placeholder={'Unit'} label='Unit'/>
                            <Input placeholder={'Price'} label='Price'/>
                            <Input placeholder={'Profit'} label='Profit'/>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <Input placeholder={'Name'} label='Name'/>
                            <Input placeholder={'Name'} label='Name'/>
                            <Input placeholder={'Name'} label='Name'/>
                            <Input placeholder={'Name'} label='Name'/>
                        </div>
                    </div>
                    <div className="pt-8">
                        <SubmitButton text='Edit'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;