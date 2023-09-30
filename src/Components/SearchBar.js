/*import React from "react";*/

/*const SearchBar = () => {
  // SearchBar component code
};

export default SearchBar;*/
const searchForm = document.querySelector(".search-bar");
const searchInput = document.querySelector("#textsearch");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = searchInput.value;
  // Perform search functionality here
  console.log("Searching for:", searchTerm);
  // Clear the search input
  searchInput.value = "";
});
