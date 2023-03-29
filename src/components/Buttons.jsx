import Link from "next/link"

function NovemberButton(props){
    if(props.url){
        return(
            <Link href={props.url} className="flex flex-col items-center justify-center group cursor-pointer">
                <div className={`px-[19px] py-[13px] ${props.innerShadow ? 'shadow-inner' : 'shadow-xl'} ${props.shadowStyle} bg-opacity-50 transition-all delay-200 rounded-full `}>
                    <button className={`${props.buttonStyle} shadow-md rounded-full py-[8px] px-5 border active:scale-90 transition-all`}>{props.text}</button>
                </div>
            </Link>
        )
    }
    return(
        <button onClick={props.onClick} className="flex flex-col items-center justify-center group cursor-pointer">
            <div className={`px-[19px] py-[13px] ${props.innerShadow ? 'shadow-inner' : 'shadow-xl'} ${props.shadowStyle} bg-opacity-50 transition-all delay-200 rounded-full `}>
                <button className={`${props.buttonStyle} shadow-md rounded-full py-[8px] px-5 border active:scale-90 transition-all`}>{props.text}</button>
            </div>
        </button>
    )
}
function NativeButton(props){
    return(
        <Link href={props.url}><button className={`${props.style} py-1.5 sm:py-2 shadow-xl  text-[18px] rounded-full sm:px-6 px-4 hover:opacity-80 active:opacity-50`}>{props.text}</button></Link> 
    )
}
function GlowingButton(props){
    if (props.url){
        return(
            <Link href={props.url} className={`bg-white shadow-black text-black relative self-center rounded-full border px-5 py-2 glow-btn shadow-2xl text-[14px] sm:text-[18px] glow-effect transition-all`}>
                {props.text}
                <svg className="outline-1 glow-container absolute pointer-events-none glow-effect">
                    <rect rx='20px' pathLength='100' strokeLinecap="round" className="glow-line"></rect>
                    <rect rx='20px' pathLength='100' strokeLinecap="round" className="glow-blur"></rect>
                </svg>
            </Link>
        )
    }
    return(
        <button className={`bg-white text-black shadow-black relative self-center rounded-full border px-5 py-2 glow-btn shadow-2xl text-[14px] sm:text-[18px] glow-effect transition-all`}>
            {props.text}
            <svg className="outline-1 glow-container absolute pointer-events-none glow-effect">
                <rect rx='20px' pathLength='100' strokeLinecap="round" className="glow-line"></rect>
                <rect rx='20px' pathLength='100' strokeLinecap="round" className="glow-blur"></rect>
            </svg>
        </button>
    )
}

export { NovemberButton, NativeButton, GlowingButton }