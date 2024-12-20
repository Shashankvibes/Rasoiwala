

import { restrauntlist } from "../constant";
import { RestrauntCard } from "./Restraunt";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import {filterData} from "../utils/helper"
import useOnline from "../utils/Hooks/useOnline";
import OfflinePage from "./OfflinePage";

const Body = () => {

  
  //avoid rendering something


  // const searchTxt = "KFC";  
  // searchText is a local state variable;

  const [searchInput, setSearchInput] = useState("");// to create state variable

  //returns [var name, function to update the var]

  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allrestraunts, setAlltRestraunts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loading shimmer initially





  // useEffect is a callback function , when u have a empty dependency array => once after render
  // dep array [dependencies] => once after initial render + everytime aftertime the anything is updated in the dependecy 
  useEffect(() => {
    getRestraunts();
  }, [searchInput]);

  async function getRestraunts() {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    //optional chaining
    setAlltRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setIsLoading(false); //loading over (shimmer)
  }
  //conditional rendering 
  //if restraunt is empty show shimmer ui 
  //if not show data

const isOnline = useOnline();

if(!isOnline){
  return <OfflinePage/>;
}


  //early return component
  if (!allrestraunts) return null;

  return (
    <>
      <div className="search-container">
        <input type="text"
          className="search-box"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, allrestraunts);
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {Array(20).fill("").map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ):(
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {filteredRestraunts?.map((hotel) => {
          return (
            <Link key={hotel.info.id} to={"/restraunt/resId:"}>
              <RestrauntCard {...hotel.info} />
            </Link>
          );
        })}
      </div>
    
      )}
    </>
  );
};

export default Body;