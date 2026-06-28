import { SEARCH_PLACEHOLDER } from "../utils/constants";

function SearchBar({
  value,
  onChange,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-bar">
      <label
        htmlFor="user-search"
        className="search-bar__label"
      >
        Search Users
      </label>

      <input
        id="user-search"
        type="search"
        className="search-bar__input"
        placeholder={SEARCH_PLACEHOLDER}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        aria-label="Search users by first name, last name, email, or department"
      />
    </div>
  );
}

export default SearchBar;