import { useEffect, useState } from "react";

import {
  EMPTY_FILTERS,
} from "../utils/constants";

function FilterPopup({
  filters,
  applyFilters,
  resetFilters,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [localFilters, setLocalFilters] =
    useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLocalFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleApply = () => {
    applyFilters(localFilters);

    setIsOpen(false);
  };

  const handleReset = () => {
    setLocalFilters(EMPTY_FILTERS);

    resetFilters();

    setIsOpen(false);
  };

  return (
    <div className="filter-popup">
      <button
        type="button"
        className="secondary-button"
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        aria-expanded={isOpen}
      >
        Filters
      </button>

      {isOpen && (
        <div
          className="filter-popup__content"
          role="dialog"
          aria-modal="false"
        >
          <h3>
            Filter Users
          </h3>

          <div className="filter-popup__field">
            <label htmlFor="filter-first-name">
              First Name
            </label>

            <input
              id="filter-first-name"
              type="text"
              name="firstName"
              value={localFilters.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="filter-popup__field">
            <label htmlFor="filter-last-name">
              Last Name
            </label>

            <input
              id="filter-last-name"
              type="text"
              name="lastName"
              value={localFilters.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="filter-popup__field">
            <label htmlFor="filter-email">
              Email
            </label>

            <input
              id="filter-email"
              type="text"
              name="email"
              value={localFilters.email}
              onChange={handleChange}
            />
          </div>

          <div className="filter-popup__field">
            <label htmlFor="filter-department">
              Department
            </label>

            <input
              id="filter-department"
              type="text"
              name="department"
              value={localFilters.department}
              onChange={handleChange}
            />
          </div>

          <div className="filter-popup__actions">
            <button
              type="button"
              className="secondary-button"
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={handleApply}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterPopup;