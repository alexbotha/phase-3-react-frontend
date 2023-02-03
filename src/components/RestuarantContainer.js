import React, { useState } from "react";
import RestuarantItem from "./RestuarantItem";
import Search from "./Search";
import AddRestuarantButton from "./AddRestuarantButton";

function RestuarantContainer({ restuarants }) {
  const [searchInput, setSearchInput] = useState("");

  function searchInputFunction(e) {
    setSearchInput(e);
  }

  const filteredRestuarants = restuarants.filter((restuarant) =>
    restuarant.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="searchbar">
        <Search
          searchInput={searchInput}
          searchInputFunction={searchInputFunction}
        />
        <AddRestuarantButton />
      </div>
      {filteredRestuarants.map((filteredRestuarant) => (
        <RestuarantItem
          key={filteredRestuarant.id}
          id={filteredRestuarant.id}
          filteredRestuarant={filteredRestuarant}
        />
      ))}
    </>
  );
}
export default RestuarantContainer;
