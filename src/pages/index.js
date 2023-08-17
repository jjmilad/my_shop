import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Order from "@/components/Order";
import { useEffect, useState } from "react";
import PopUp from "@/components/PopUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../firebase";
import { useRouter } from "next/navigation";
import { collection, getCountFromServer, limit, onSnapshot, query } from "firebase/firestore";


//components
const StickyDiv = (props) => {
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
const DashboardCard=(props)=>{
  return (
    <section className="bg-white relative h-[82vh] dashboard-card border col-span-1 rounded-xl shadow-md overflow-hidden">
      {props.children}
    </section>
  );
}
function TableColumnNames() {
  return (
    <div className="flex px-4 gap-4 pt-4 text-[13px] text-gray-500 border-b pb-2">
      <span className="w-[80%]">Name</span>
      <span>Menge</span>
      <span>Preis</span>
    </div>
  );
}

//functions
const getTableCount = async (collectionName, setValue)=>{
  const coll = collection(firestore, collectionName)
  const snapshot = await getCountFromServer(coll)
  setValue(snapshot.data().count)
}
const getCollectionList = async (collectionName, setValue) => {
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
  //product states
  const [productsCount, setProductsCount] = useState()
  const [productsList, setProductsList] = useState()
  const [productPopUp, setProductPopUp] = useState()
  //order states
  const [ordersCount, setOrdersCount] = useState()
  const [ordersList, setOrdersList] = useState()

  useEffect(() => {
    //product table
    getTableCount('products', setProductsCount)
    getCollectionList('products', setProductsList)
    //order table
    getTableCount('orders', setOrdersCount)
    getCollectionList('orders', setOrdersList)
  },[]);


  return (
    <main className="w-full h-auto bg-secondary">
      <Navbar />
      <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-5 p-4 md:p-10">

        <DashboardCard>
          <StickyDiv top={true}>
            <h2 className="text-[18px] text-gray-500">Orders</h2>
            <div className="">
              <div>
                <span className="text-[30px] font-semibold mr-1.5">{0}</span>
                <span className="text-[15px] font-normal text-gray-400">
                  Current Session
                </span>
              </div>
              <div>
                <span className="text-[24px] font-semibold leading-6 mr-1.5">
                  {ordersCount ? ordersCount : '?'}
                </span>
                <span className="text-[15px] font-normal text-gray-400">
                  Total
                </span>
              </div>
            </div>
          </StickyDiv>
          <ul className="py-4 px-6 h-full pb-64 flex flex-col gap-4 overflow-y-scroll">
            <TableColumnNames />
            {
              ordersList?.map((item)=>{
                return(
                  <Order data={item}/>
                )
              })
            }
          </ul>
        </DashboardCard>

        <DashboardCard>
          <div className="border-b pb-4 px-7 py-8">
            <h2 className="text-[18px] text-gray-500">Sales</h2>
            <div className="">
              <span className="text-[30px] font-semibold">
                304${" "}
                <span className="text-[15px] font-normal text-gray-400">
                  Profit
                </span>
              </span>
              <div className="grid grid-cols-2 mt-6 gap-y-6">
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Original Balance
                  </span>
                  <span className="text-[18px] font-semibold">12322$</span>
                </div>
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Current Balance
                  </span>
                  <span className="text-[18px] font-semibold">12322$</span>
                </div>
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Stock Value
                  </span>
                  <span className="text-[18px] font-semibold">12322$</span>
                </div>
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Possible Profit
                  </span>
                  <span className="text-[18px] font-semibold">12322$</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 px-7 py-8 h-full">
            <h2 className="font-medium text-[15px]  text-gray-500">
              Three Best selling products
            </h2>
            <ul className="pt-4 flex flex-col gap-4">
              <Product />
              <Product />
              <Product />
            </ul>
          </div>
          <StickyDiv top={false} noPadding={true}>
            <div className="rounded-lg w-full flex shadow-sm gap-1 px-4 pb-5">
              <div className="bg-[#bfdbfe] italic shadow-sm flex justify-center cursor-pointer items-center text-[12px] w-[20%] h-10 rounded-l-lg group active:scale-105 transition-all">
                <p>Profit 20%</p>
                <div className="absolute -top-6 hidden group-hover:flex transition-all rounded-lg py-2 group-active:-top-12 px-4 bg-helper2 shadow-sm whitespace-nowrap translate-x-[30%] text-gray-600">
                  The amount earned
                </div>
              </div>
              <div className="bg-helper italic w-[80%] shadow-sm text-[12px] flex justify-center items-center rounded-r-lg group cursor-pointer active:scale-105 transition-all">
                <p>Balance 80%</p>
                <div className="absolute -top-6 hidden group-hover:flex transition-all rounded-lg py-2 group-active:-top-12 px-4 bg-helper2 shadow-sm whitespace-nowrap text-gray-600">
                  The amount spended
                </div>
              </div>
            </div>
          </StickyDiv>
        </DashboardCard>

        <DashboardCard>
          <StickyDiv top={true}>
            <h2 className="text-[18px] text-gray-500">Products</h2>
            <div className="mt-2">
              <h3 className="text-[30px] font-semibold leading-6 shadow-bottom  transition-all">
                {productsCount ? productsCount : "?"}{" "}
                <span className="text-[15px] font-normal text-gray-400">
                  Products
                </span>
              </h3>
            </div>
          </StickyDiv>
          <ul className="px-6 py-4 pb-64 h-full flex flex-col gap-4 overflow-y-scroll">
            <TableColumnNames />
            {productsList?.map((item) => (
              <Product data={item} open={(id) => {
                setProductPopUp(id);
              }} />
            ))}
          </ul>
        </DashboardCard>

      </div>

      {productPopUp && (
        <PopUp
          close={() => {
            setProductPopUp(false);
          }}
          status={productPopUp}
        />
      )}
    </main>
  );
}
