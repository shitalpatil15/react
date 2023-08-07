import { IMG_CDN_URL } from '../utils/constants'

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {

  return (
    <>
      <img className="rounded" src={IMG_CDN_URL + cloudinaryImageId} />
      <p className='font-bold my-2'>{name}</p>
      <span className='font-thin text-sm'>{cuisines.join(", ")}</span>

      <p className='flex flex-wrap justify-between my-2'>
        <p>{area}</p>
        <span>⭐ {avgRating}</span>

      </p>

      <p className='flex flex-wrap justify-between'>
        <span>• {lastMileTravelString}</span>
        <span>• {costForTwoString}</span>
      </p>
    </>
  )
};

export default RestaurantCard;