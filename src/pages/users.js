import Navbar from "@/components/Navbar";
import { IoTrash } from "react-icons/io5";
import { AuthenticateUser } from "./add/product";
import { useRouter } from "next/navigation";
import { auth, firestore } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { deleteUser } from 'firebase/auth'

const User = (props)=>{
    return(
        <li className="bg-helper2 shadow-sm flex justify-between rounded-lg ">
            <div className="flex justify-between px-4 py-2 w-full items-center">
                <span className="font-medium">{props.data.name}</span>
                <span className="text-gray-600 text-[11px] md:text-[15px]">{props.data.email}</span>
            </div>
            <button onClick={()=>props.delete(props.data.id)} className="h-full px-4 bg-red-500 rounded-r-lg hover:opacity-80 active:opacity-50 group">
                <IoTrash style={{color:'white'}} className="h-5 w-5 group-active:scale-90 transition-all"/>
            </button>
        </li>
    )
}

function Users() {
    //authentication
    const router = useRouter()
    const user = auth.currentUser
    AuthenticateUser(router)

    const [usersList, setUsersList] = useState()
    const newList = []

    const getUsers = async ()=>{
        const usersListRef = collection(firestore, 'users')
        const q = query(usersListRef, where('isAdmin', '==', false))
        const result = await getDocs(q)
        if(!result.empty){
            result.forEach(item => {
                newList.push(item.data())
            })
            setUsersList(newList)
        }
    }
    const deleteUserFromDb = async (id)=>{
        console.log(id)
        const userRef = doc(firestore, 'users', id)
        await deleteDoc(userRef)
        .then(()=>{
            deleteUser(id)
        })
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <main className="bg-secondary">
            <Navbar/>
            <div className="bg-white border-y p-10">
                <div className="container mx-auto">
                    <h1 className="font-medium text-[30px] font-serif">Benutzer</h1>
                    <div className="grid md:grid-cols-2 md:gap-10 gap-6 py-5">
                        <ul className="flex flex-col gap-4">
                            {
                                usersList ? usersList.map((user)=>{
                                    return(
                                        <User data={user} key={user.id} delete={deleteUserFromDb}/>
                                    )
                                })
                                : 
                                'No User Found'
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Users;

