import { IMG_CDN_URL } from "../constant.jsx";

export const FoodItem = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
}) => {
  console.log(cuisines);
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 h-full">
        <img
          className="w-full h-40 object-cover"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
          <h3 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h3>
          <h4
            className={`text-sm font-medium ${
              avgRatingString >= 4
                ? "text-green-500"
                : avgRatingString >= 3
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            ⭐ {avgRatingString}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;