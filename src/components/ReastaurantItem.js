
import { useState } from "react";
import ItemDescriptionAccordion from "./ItemDescriptionAccordion";
const ReastaurantItem = ({ item, isShowAccordion, setShowIndex }) => {

  //  const [isShowAccordion, setIsShowAccordion] = useState(false);
  
    console.log("isShowAccordion", isShowAccordion)


    return <div className="shadow-lg bg-gray-50 border-solid mt-2 p-2">

        <div >
            <p  onClick={() => { setShowIndex()}} className="font-bold">{item.title} ({item?.itemCards?.length})</p>
        </div>

        {isShowAccordion &&  <ItemDescriptionAccordion items={item.itemCards}/> }
       


    </div>
}


export default ReastaurantItem