import Button from "@/components/Button";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { auth, firestore } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthenticateUser } from "../users";

export const checkInput = (inputList)=>{
    inputList.forEach(item => {
        if(!item && item === undefined){
            return false
        }
    })
    return true
    
}
const addUsertoDb = async(user, name, email, setValue)=>{
    const userRef = doc(firestore, 'users', user.uid)
    await setDoc(userRef, {
        id: user.uid,
        name: name,
        email: email,
        isAdmin: false
    })
    setValue(1)
}

function User() {
    //authentication
    const router = useRouter()
    const user = auth.currentUser
    AuthenticateUser(user, router, false)

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const [status, setStatus] = useState()

    const addUser = async ()=>{
        if(!checkInput([email, name, password, confirmPassword])){
            setStatus(0)
        }
        else if(password !== confirmPassword){
            setStatus(2)
        }
        else{
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth)=>{
                addUsertoDb(userAuth.user,name,email, setStatus)
            })
            .catch(()=>{
                setStatus(0)
            })
            
        }
    }

    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y h-full w-full p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Benutzer hinzufügen</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <div className="flex flex-col gap-6">
                            <Input value={name} setValue={setName} type='text' placeholder='Ahmad' label='Name'/>
                            <Input value={email} setValue={setEmail} type='email' placeholder='ahmad@gmail.com' label='Email'/>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Input value={password} setValue={setPassword} type='password' label='Bestätige das Passwort'/>
                            <Input value={confirmPassword} setValue={setConfirmPassword} type='password' label='Confirm Password'/>
                        </div>
                    </div>
                    <Button onClick={addUser} text='Add'/>
                    <div className="py-4">
                        <span className="text-blue-500">{ status === 1 ? 'Benutzer erfolgreich hinzugefügt' : status === 2 ? 'Bitte bestätigen Sie Ihr Passwort korrekt' : status === 0 ? 'Error' : '' }</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default User;