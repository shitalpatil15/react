import { useState, useEffect } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { Shimmer } from './Shimmer';
import { swiggy_api_URL, restaurantListData } from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const isOnline = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect called after body render")
    fetchData()
  }, []);


  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL)
    const json = await data.json();
    // const result = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // updated state variable restaurants with Swiggy API data
    // setRestaurantList(result);
    setRestaurantList(restaurantListData); //swiggy has changed the api
    setFilteredRestaurantList(restaurantListData);
  }

  if (false === isOnline) return <h2>Looks like you are offline! Please check your internet connection.</h2>
  // conditional rendering
  return (restaurantList?.length === 0) ? <Shimmer /> :
    (
      <div className="body">
        <div className="search-bar flex flex-wrap my-3">
          {/* search box */}
          <div className="search rounded-md bg-blue-200 ml-3 shadow-lg">
            <input className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 items-center justify-center rounded-md border-2 border-slate-300 text-sm text-slate-900 font-medium" type="text" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
            <button className="mx-3 px-3" onClick={() => {
              const filterData = restaurantList.filter(e => e.data.name.toLowerCase().includes(searchValue.toLowerCase()));
              setFilteredRestaurantList(filterData);

            }}>Search</button>
          </div>

          {/* top rated button */}
          <button className="rounded-md border-solid shadow-lg mx-3 px-3 bg-blue-200" onClick={() => {
            const filterData = restaurantList.filter(e => e.data.avgRating > 4);
            setFilteredRestaurantList(filterData)
          }}>Top Rated Restaurants</button>
        </div>


        {/* cards */}
        <div className="res-container flex flex-wrap  justify-center">
          {filteredRestaurantList.map(resData => {
            return <Link className="card w-[250px] m-3 p-2 rounded shadow-md hover:bg-red-100 bg-red-50" to={"/restaurant/" + resData.data.id} key={resData.data.id} ><RestaurantCard {...resData.data} /></Link>
            // return <RestaurantCard {...resData.data} />
          })}
        </div>
      </div>
    )

}


export default Body;