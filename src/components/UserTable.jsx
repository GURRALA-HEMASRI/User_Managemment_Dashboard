import UserRow from "./UserRow";

import {
  SORT_DIRECTIONS,
  TABLE_COLUMNS,
} from "../utils/constants";

function UserTable({
  users,
  sortConfig,
  onSort,
  onEdit,
  onDelete,
}) {
  const getSortIcon = (field) => {
    if (sortConfig.field !== field) {
      return "⇅";
    }

    return sortConfig.direction ===
      SORT_DIRECTIONS.ASC
      ? "▲"
      : "▼";
  };

  return (
    <section className="table-container">
      <table className="user-table">

        <thead>

          <tr>

            {TABLE_COLUMNS.map((column) => (
              <th
                key={column.key}
                scope="col"
              >
                {column.sortable ? (
                  <button
                    type="button"
                    className="sort-button"
                    onClick={() =>
                      onSort(column.key)
                    }
                  >
                    {column.label}

                    <span className="sort-icon">
                      {getSortIcon(
                        column.key
                      )}
                    </span>
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}

            <th scope="col">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {users.length === 0 ? (
            <tr>
              <td
                colSpan={
                  TABLE_COLUMNS.length + 1
                }
                className="empty-state"
              >
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}

        </tbody>

      </table>
    </section>
  );
}

export default UserTable;