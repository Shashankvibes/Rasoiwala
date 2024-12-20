const Shimmer = () => {
    return (
      <div className="w-full p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse h-full">
          <div className="w-full h-40 bg-gray-300 shimmer-image"></div>
          <div className="p-4">
            <div className="w-3/4 h-4 bg-gray-300 mb-2 rounded shimmer-line shimmer-title"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded shimmer-line shimmer-description"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  