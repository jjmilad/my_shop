import { useEffect } from "react";
import { signOut } from 'firebase/auth'
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";

function LogOut() {
    const router = useRouter()
    const logOut = ()=>{
        signOut(auth)
        router.push('/auth/signin')
    }
    useEffect(()=>{
        logOut()
    },[])
}

export default LogOut;