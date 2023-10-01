import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  //const handleSearch = () => {
  // Perform search functionality here
  // console.log("Searching for:", searchTerm);
  // };
  return (
    <div className="search-bar">
      <input
        type="text"
        id="textsearch"
        placeholder="Search Google or type a URL"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button onClick={handleSearch}>Search</button>*/}
    </div>
  );
}

export default SearchBar;
