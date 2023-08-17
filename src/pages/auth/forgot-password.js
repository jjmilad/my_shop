import { sendPasswordResetEmail } from "firebase/auth";
import { IoChevronForward } from "react-icons/io5";
import { auth } from "../../../firebase";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState()
  const [status, setStatus] = useState()

  const forgotPassword = ()=>{
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      setStatus(1)
    })
    .catch(()=>{
      setStatus(0)
    })
  }
    return (
      <main className="bg-secondary">
        <div className="absolute top-[50%] right-[50%] translate-x-[50%] w-full px-4 md:px-0 translate-y-[-50%] cusomt-shadow flex flex-col gap-7  justify-center items-center">
          <div className="">
            <p className="text-[20px]">Bitte geben Sie ihre E-Mail-Adresse ein</p>
          </div>
          <div className="bg-[#ffffff] rounded-2xl shadow-md border bord er-red-500 sm:w-[360px] w-full">
            <div className="relative">
              <input onChange={(e)=>setEmail(e.target.value)} type="email" className="h-[65px] rounded-xl text-[19px] focus:ring p-6 outline-none w-full bg-transparent" placeholder="Email"/>
              <button onClick={forgotPassword} className="absolute right-0 bottom-0 bg-secondary group shadow-sm hover:bg-helper2 hover:bg-blue-100 h-full rounded-2xl px-2">
                <IoChevronForward style={{color:'gray'}} className="h-8 w-8 group-hover:scale-110 transition-all"/>
              </button>
            </div>
          </div>
          <span className={` ${ status === 1 ? 'text-blue' : 'text-red-500'} italic text-[15px]`}>{status === 1 ? 'Ein Link zum Zurücksetzen des Passworts wurde an Ihre E-Mail-Adresse gesendet' : status === 0 ? 'Falsche Email oder Passwort' : ''}</span>
        </div>
      </main>
    );
}

export default ForgotPassword;