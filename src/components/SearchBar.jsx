import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold text-gray-900">Search for food</h1>

      <div className="flex">
        <input
          type="text"
          placeholder="Search for dishes or restaurants"
          value={search}
          onChange={handleInputChange}
          className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button className="bg-red-400 text-white px-4 rounded-r-lg hover:bg-red-500">
          Search
        </button>
      </div>

      <div className="flex gap-2">
        <button className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
          Tacos
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
          Pizza
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
          Salads
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
