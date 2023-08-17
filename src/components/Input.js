function Input({ type, placeholder, label, value, setValue}) {
    return (
        <div className="">
            <label className="text-[14px]  font-medium text-[#555555]">{label}</label>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type={type} className="w-full border border-[#e0e1e4] focus:ring outline-none shadow-sm rounded-lg px-4 py-2 text-[14px]" placeholder={placeholder} />
        </div>
    );
}

export default Input;