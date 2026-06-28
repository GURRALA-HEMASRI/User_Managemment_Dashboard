function UserRow({
  user,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="user-table__row">
      <td>{user.id}</td>

      <td>{user.firstName}</td>

      <td>{user.lastName}</td>

      <td>{user.email}</td>

      <td>{user.department}</td>

      <td className="user-table__actions">
        <button
          type="button"
          className="edit-button"
          onClick={() => onEdit(user)}
          aria-label={`Edit ${user.firstName} ${user.lastName}`}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(user)}
          aria-label={`Delete ${user.firstName} ${user.lastName}`}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;