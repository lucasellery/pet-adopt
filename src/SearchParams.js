import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Montreal, Quebec");

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={updateLocation}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
