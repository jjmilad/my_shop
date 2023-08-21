import Navbar from "@/components/Navbar";
import { useState } from "react";
import PopUp from "@/components/PopUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../firebase";
import { useRouter } from "next/navigation";
import { collection, getCountFromServer, limit, onSnapshot, query } from "firebase/firestore";
import DashboardOrdersCard from "@/components/DashboardOrdersCard";
import DashboardProductsCard from "@/components/DashboardProducsCard";
import DashboardSalesCard from "@/components/DashboardSalesCard";


//components
export const StickyDiv = (props) => {
  return(
    <div
      className={`sticky ${
        props.top
          ? "shadow-bottom top-0 pb-5 border-b rounded-t-xl"
          : "shadow-top bottom-0 pt-5 border-t rounded-b-xl"
      } right-0 left-0 ${props.noPadding ? "p-0" : "px-7 py-8"} bg-white `}
    >
      {props.children}
    </div>
  )
};
export const DashboardCard=(props)=>{
  return (
    <section className="bg-white relative h-[82vh] dashboard-card border col-span-1 rounded-xl shadow-md overflow-hidden">
      {props.children}
    </section>
  );
}
export function TableColumnNames() {
  return (
    <div className="flex px-4 gap-4 pt-4 text-[13px] text-gray-500 border-b pb-2">
      <span className="w-[80%]">Name</span>
      <span>Menge</span>
      <span>Preis</span>
    </div>
  );
}

//functions
export const getTableCount = async (collectionName, setValue)=>{
  const coll = collection(firestore, collectionName)
  const snapshot = await getCountFromServer(coll)
  setValue(snapshot.data().count)
}
export const getCollectionList = async (collectionName, setValue) => {
  const coll = collection(firestore, collectionName)
  const q = query(coll, limit(10))

  const result = onSnapshot(q, (doc) => {
    const newList = []
    doc.forEach(item => {
      newList.push(item.data())
    })
      setValue(newList)
  })
}

export default function Home() {
  //authentication
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/auth/signin");
    }
  })

  const [productPopUpData, setProductPopUpData] = useState()

  return (
    <main className="w-full h-auto bg-secondary">
      <Navbar />
      <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-5 p-4 md:p-10">

        <DashboardOrdersCard/>
        <DashboardSalesCard/>
        <DashboardProductsCard setProductPopUp={setProductPopUpData}/>

      </div>

      {productPopUpData && (
        <PopUp
          close={() => {
            setProductPopUpData(false)
          }}
          data={productPopUpData}
        />
      )}
    </main>
  );
}
