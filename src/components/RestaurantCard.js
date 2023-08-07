import { IMG_CDN_URL } from '../utils/constants'

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {

  return (
    <div>
      <img className="rounded" src={IMG_CDN_URL + cloudinaryImageId} />
      <p className='font-bold my-2'>{name}</p>
      <span className='font-thin text-sm'>{cuisines.join(", ")}</span>

      <div className='flex flex-wrap justify-between my-2'>
        <p>{area}</p>
        <span>⭐ {avgRating}</span>

      </div>

      <p className='flex flex-wrap justify-between'>
        <span>• {lastMileTravelString}</span>
        <span>• {costForTwoString}</span>
      </p>
    </div>
  )
};

export const withPromotedLabel = (RestaurantCard) => {

  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white rounded-md p-1 border-red border-solid'>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;