import { DashboardCard, StickyDiv, TableColumnNames, getCollectionList, getTableCount } from "@/pages";
import Product from "./Product";
import { useEffect, useState } from "react";

function DashboardProductsCard(props) {
    const [productsCount, setProductsCount] = useState()
    const [productsList, setProductsList] = useState()

    //get realtime updates from server
    useEffect(() => {
        getCollectionList('products', setProductsList)
    },[]);

    //products count
    useEffect(()=>{
        getTableCount('products', setProductsCount)
    },[productsList])

    return (
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
              <Product data={item} key={item.id} id={item.id} open={props.setProductPopUp} />
            ))}
          </ul>
        </DashboardCard>
    );
}

export default DashboardProductsCard;