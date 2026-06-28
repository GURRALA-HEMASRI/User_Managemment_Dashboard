import { PAGE_SIZE_OPTIONS } from "../utils/constants";

function Pagination({
  pagination,
  onPageChange,
  onPageSizeChange,
}) {
  const {
    currentPage,
    pageSize,
    totalPages,
    totalRecords,
  } = pagination;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const isPreviousDisabled =
    currentPage === 1;

  const isNextDisabled =
    currentPage === totalPages;

  const handlePageSizeChange = (
    event
  ) => {
    onPageSizeChange(
      Number(event.target.value)
    );
  };

  return (
    <section className="pagination">

      <div className="pagination__info">

        <span>
          Total Users:
          {" "}
          <strong>{totalRecords}</strong>
        </span>

      </div>

      <div className="pagination__controls">

        <button
          type="button"
          className="secondary-button"
          disabled={isPreviousDisabled}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
        >
          Previous
        </button>

        <div className="pagination__pages">

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              className={
                pageNumber === currentPage
                  ? "page-button page-button--active"
                  : "page-button"
              }
              onClick={() =>
                onPageChange(pageNumber)
              }
            >
              {pageNumber}
            </button>
          ))}

        </div>

        <button
          type="button"
          className="secondary-button"
          disabled={isNextDisabled}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

      <div className="pagination__size">

        <label htmlFor="page-size">
          Rows per page
        </label>

        <select
          id="page-size"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option
              key={size}
              value={size}
            >
              {size}
            </option>
          ))}
        </select>

      </div>

    </section>
  );
}

export default Pagination;