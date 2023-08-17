import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";


function Product() {
  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const SignIn = async()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((authData)=>{
      const user = authData.user
      if(user){
        router.push('/')
      }
      else{
        setErrorMessage(true)
      }
    })
    .catch((error)=>{
      setErrorMessage(true)
    })
  }

  return (
      <main className="bg-secondary">
        <div className="absolute top-[50%] right-[50%] translate-x-[50%] w-full px-4 md:px-0 translate-y-[-50%] cusomt-shadow flex flex-col gap-7  justify-center items-center">
          <div className="text-center">
            <h1 className="text-[50px] font-medium font-serif leading-tight">Willkommen</h1>
            <p className="text-[12px] italic">Bitte geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein, um sich anzumelden</p>
          </div>
          <div className={`bg-[#ffffff] rounded-2xl shadow-md border ${ errorMessage ? 'border-red-500' : '' } sm:w-[360px] w-full`}>
            <input onChange={(e)=>setEmail(e.target.value)} type='email' className={`border-b h-[66px] focus:ring rounded-t-xl ${ errorMessage ? 'border-red-500' : ''} text-[19px] ring-inset p-6 outline-none w-full bg-transparent`} placeholder="Email address"/>
            <div className="relative">
              <input onChange={(e)=>setPassword(e.target.value)} type="password" className="h-[65px] rounded-b-xl text-[19px] focus:ring p-6 outline-none w-full bg-transparent" placeholder="Password"/>
              <button onClick={SignIn} className="absolute right-0 bottom-0 bg-secondary group shadow-sm hover:bg-helper2 hover:bg-blue-100 h-full rounded-br-2xl px-2">
                <IoChevronForward style={{color:'gray'}} className="h-8 w-8 group-hover:scale-110 transition-all"/>
              </button>
            </div>
          </div>
          <div className="">
            <Link href={'/auth/forgot-password'} className="text-gray-600 hover:opacity-80 active:scale-110 font-medium text-[15px]">Passwort vergessen?</Link>
          </div>
          <span className={`text-red-500 italic text-[15px] transition-all ${errorMessage ? 'visible' : 'invisible'}`}>Falsche Email oder Passwort</span>
        </div>
      </main>
  );
}

export default Product;