import { DashboardCard, StickyDiv } from "@/pages";
import Product from "./Product";
import { collection, doc, getDocs, limit, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";

function DashboardSalesCard() {
    const [analyticsData, setAnalyticsData] = useState()
    const [profitPercentage, setProfitPercentage] = useState(0)
    const [balancePercentage, setBalancePercentage] = useState(100)
    const [topSoldProducts, setTopSoldProducts] = useState()

    const getSalesData = async () => {
        const docRef = doc(firestore, 'sales', 'salesAnalytics')
        const result = onSnapshot(docRef, (doc) => {
          setAnalyticsData(doc.data())
        })
    }
    const getTopSoldProducts = async()=>{
        const coll = collection(firestore, 'products')
        const q = query(coll, where('analytics.itemSold', '>', 100), limit(3))
        const newList = []
        const result = await getDocs(q)
        if(!result.empty){
          result.forEach(item => {
            newList.push(item.data())
          });
          setTopSoldProducts(newList)
        }


    }

    //get real time data
    useEffect(()=>{
        getSalesData()
        getTopSoldProducts()
    },[])

    //calculate profit
    useEffect(()=>{
        if(analyticsData){
            const cal = analyticsData.profit / analyticsData.originalBalance * 100
            setProfitPercentage(cal)
            setBalancePercentage(100 - cal)
        }
    },[analyticsData])

    return (
        <DashboardCard>
          <div className="border-b pb-4 px-7 py-8">
            <h2 className="text-[18px] text-gray-500">Sales</h2>
            <div className="">
              <span className="text-[30px] font-semibold">
                ${analyticsData ? analyticsData.profit : ''} 
                <span className="text-[15px] font-normal ml-1 text-gray-400">
                  Profit
                </span>
              </span>
              <div className="grid grid-cols-2 mt-6 gap-y-6">
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Original Balance
                  </span>
                  <span className="text-[18px] font-semibold">${analyticsData ? analyticsData.originalBalance : ''} </span>
                </div>
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Current Balance
                  </span>
                  <span className="text-[18px] font-semibold">${analyticsData ? analyticsData.currentBalance : ''} </span>
                </div>
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Stock Value
                  </span>
                  <span className="text-[18px] font-semibold">${analyticsData ? analyticsData.stockValue : ''} </span>
                </div>
                <div className=" flex flex-col col-span-1">
                  <span className="text-[14px] font-normal text-gray-400">
                    Possible Profit
                  </span>
                  <span className="text-[18px] font-semibold">${analyticsData ? analyticsData.possibleProfit : ''} </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 px-7 py-8 h-full">
            <h2 className="font-medium text-[15px]  text-gray-500">
              Products That Sold Over 100 Items
            </h2>
            <ul className="pt-4 flex flex-col gap-4">
              {
                topSoldProducts ? 
                topSoldProducts.map((item)=>{
                  return(
                    <Product key={item.id} data={item} />
                  )
                })
                :
                <div className="rounded-lg py-2 px-5 bg-helper font-medium shadow-sm">
                  <span>None</span>
                </div>
              }
            </ul>
          </div>
          <StickyDiv top={false} noPadding={true}>
            <div className="rounded-lg w-full flex shadow-sm gap-1 px-4 pb-5">
              <div style={{width: profitPercentage+'%'}} className={`bg-[#bfdbfe] italic shadow-sm flex justify-center cursor-pointer items-center text-[12px] h-10 rounded-l-lg group active:scale-105 transition-all`}>
                <p>Profit {profitPercentage ? profitPercentage : '?'}%</p>
                <div className="absolute -top-6 hidden group-hover:flex transition-all rounded-lg py-2 group-active:-top-12 px-4 bg-helper2 shadow-sm whitespace-nowrap translate-x-[30%] text-gray-600">
                  The amount earned
                </div>
              </div>
              <div style={{width: balancePercentage+'%'}} className={`bg-helper italic shadow-sm text-[12px] flex justify-center items-center rounded-r-lg group cursor-pointer active:scale-105 transition-all`}>
                <p>Balance {balancePercentage ? balancePercentage : '?'}%</p>
                <div className="absolute -top-6 hidden group-hover:flex transition-all rounded-lg py-2 group-active:-top-12 px-4 bg-helper2 shadow-sm whitespace-nowrap text-gray-600">
                  The amount spended
                </div>
              </div>
            </div>
          </StickyDiv>
        </DashboardCard>
    );
}

export default DashboardSalesCard;