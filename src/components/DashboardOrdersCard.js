import { DashboardCard, StickyDiv, TableColumnNames, getCollectionList, getTableCount } from "@/pages";
import Order from "./Order";
import { useEffect, useState } from "react";

function DashboardOrdersCard(props) {
    const [ordersCount, setOrdersCount] = useState()
    const [ordersList, setOrdersList] = useState()

    //get realtime updates from server
    useEffect(() => {
        getCollectionList('orders', setOrdersList)
    },[]);

    //orders count
    useEffect(()=>{
        getTableCount('orders', setOrdersCount)
    },[ordersList])


    return (
        <DashboardCard>
          <StickyDiv top={true}>
            <h2 className="text-[18px] text-gray-500">Orders</h2>
            <div className="mt-2">
              <h3 className="text-[30px] font-semibold leading-6 shadow-bottom  transition-all">
                {ordersCount ? ordersCount : '?'}
                <span className="text-[15px] font-normal text-gray-400 ml-1">
                  Products
                </span>
              </h3>
            </div>
          </StickyDiv>
          <ul className="py-4 px-6 h-full pb-64 flex flex-col gap-4 overflow-y-scroll">
            <TableColumnNames />
            {
              ordersList?.map((item)=>{
                return(
                  <Order data={item} key={item}/>
                )
              })
            }
          </ul>
        </DashboardCard>
    );
}

export default DashboardOrdersCard;