export default function Order(props) {
  return (
    <li className="bg-helper3 rounded-lg w-full py-3 px-4 flex items-center justify-between shadow-sm">
      <span className="text-[15px] font-medium">{props.data && props.data.productName}</span>
      <div className="flex gap-5 items-center">
        <span className="text-[14px] font-medium text-gray-500">x{props.data && props.data.quantity}</span>
        <span className="text-[14px] font-medium text-gray-500">${props.data && props.data.price}</span>
      </div>
    </li>
  );
}
