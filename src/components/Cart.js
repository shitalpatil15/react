import { useSelector, useDispatch } from "react-redux";
import ItemDescriptionAccordion from "./ItemDescriptionAccordion";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(store => store.cart.items);
  
    return (
        <div className="w-6/12 m-auto">
            <p className="font-bold text-lg text-center">Cart</p>

            <button className="rounded-md border-solid shadow-lg mx-3 px-3 bg-blue-200" onClick={() => {
                dispatch(clearCart())
            }}>Clear Cart</button>
            <div >
                {items.length < 1 && (<h1>Cart is empty, add something to the cart!</h1>)}
                <ItemDescriptionAccordion items={items} />
            </div>
        </div>
    )
}

export default Cart;