import { IoInformationCircleOutline } from "react-icons/io5";

export default function Product(props) {
  //when less than 5 red when more than 50 green in between nothing
  return (
    <li className="bg-helper3 rounded-lg w-full h-12 flex items-center justify-between shadow-sm">
      <h2 className="text-[15px] font-medium pl-4">{props.data ? props.data.name : '?'}</h2>
      <div className="flex gap-5 items-center">
        <span className={`text-[14px] font-medium ${props.data ? Number(props.data.quantity) < 20 ? 'text-red-500' :  Number(props.data.quantity) > 50 ? 'text-green-500' : '' : '' }  `}>x{props.data ? props.data.quantity : '?'}</span>
        <span className="text-[14px] font-medium text-gray-500">${props.data ? Number(props.data.boughtPrice) + Number(props.data.profit) : '?'}</span>
        <button onClick={()=>props.open(props.data)} className="bg-helper p-3 rounded-r-xl h-12 group">
          <IoInformationCircleOutline className="h-5 w-5 group-hover:scale-110 transition-all" />
        </button>
      </div>
    </li>
  );
}
