import { IMG_CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
const ItemDescriptionAccordion = ({ items }) => {

const dispatch = useDispatch();
    const addToCart = ( item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map(e => {
                return (
                    <div key={e.card.info.id} className="flex flex-wrap bg-gray-50 border-b-2 border-gray-200 p-2" data-testid="accordian-item">
                        <div className="w-9/12">
                            <p className="text-bold">{e.card.info.name}</p>
                            <p className="text-s">₹ {(e.card.info.price) ? e.card.info.price / 100 : e.card.info.deafaultPrice / 100}</p>
                            <p className="text-xs">{e.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <img src={IMG_CDN_URL + e.card.info.imageId} alt="img" />
                            <button className="bg-black text-white px-1 m-auto block text-sm rounded" onClick={()=>{addToCart(e)}}>+ Add</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDescriptionAccordion;