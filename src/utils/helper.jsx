export function filterData(searchInput, restraunts) {
  const filterData = restraunts.filter((restraunt) =>
   //filtered 8 restraunts cards out of the whole list 
   restraunt?.info?.name?.toUpperCase()?.includes(searchInput.toUpperCase())
 );
 //lowercase or uppercase helps u to compare things at same pace 
 return filterData;
}