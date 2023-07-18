import { useState } from "react";
import { bookStore } from "../state/bookStore";

export const SearchBar = () => {
  const { setSearchBook } = bookStore();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    setSearchBook(event.target.value);
  };

  return (
    <div>
      <p>Search By Name</p>
      <input
        type="text"
        placeholder="e.g. Clean Code"
        className="input input-bordered w-full max-w-xs border border-neutral"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};
