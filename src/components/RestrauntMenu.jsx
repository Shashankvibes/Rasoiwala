import React, { useState } from "react";
import resList from "../utils/mockdata";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const [resInfo] = useState(resList);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredRestaurants = resInfo.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addFoodItem = (item) => {
    const foodItem = {
      id: item.data.id,
      name: item.data.name,
      image: `https://b.zmtcdn.com/data/pictures/5/18808035/c9677661058854b4d41bfab5dbddd6ac.jpg?fit=around|750:500&crop=750:500=${item?.data?.name}`,
      cuisine: item.data.cuisines?.join(", ") || "Cuisines Unavailable",
      rating: item.data.avgRating || "N/A",
    };

    dispatch(addItem(foodItem));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition duration-300"
            >
              <img
                src={`https://b.zmtcdn.com/data/pictures/5/18808035/c9677661058854b4d41bfab5dbddd6ac.jpg?fit=around|750:500&crop=750:500=${restaurant?.data?.name}`}
                alt={restaurant?.data?.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate mb-1">
                  {restaurant?.data?.name}
                </h2>
                <p className="text-sm text-gray-500 truncate mb-2">
                  {restaurant?.data?.cuisines?.join(", ") || "Cuisines Unavailable"}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      restaurant?.data?.avgRating >= 4
                        ? "bg-green-100 text-green-700"
                        : restaurant?.data?.avgRating >= 3
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    ⭐ {restaurant?.data?.avgRating || "N/A"}
                  </span>
                  <button 
                    className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition duration-300" 
                    onClick={() => addFoodItem(restaurant)}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No restaurants found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
