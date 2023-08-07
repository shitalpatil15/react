import { IMG_CDN_URL } from "../utils/constants"

const ItemDescriptionAccordion = ({ items }) => {

    return (
        <div>
            {items.map(e => {
                return (
                    <div key={e.card.info.id} className="flex flex-wrap bg-gray-50 border-b-2 border-gray-200 p-2">
                        <div className="w-9/12">
                            <p className="text-bold">{e.card.info.name}</p>
                            <p className="text-s">₹ {(e.card.info.price) ? e.card.info.price / 100 : e.card.info.deafaultPrice / 100}</p>
                            <p className="text-xs">{e.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <img src={IMG_CDN_URL + e.card.info.imageId} alt="img" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDescriptionAccordion;