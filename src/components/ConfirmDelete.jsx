import { DELETE_MODAL } from "../utils/constants";

function ConfirmDelete({
  isOpen,
  user,
  onCancel,
  onConfirm,
}) {
  if (!isOpen || !user) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-modal-title"
    >
      <div className="modal modal--small">

        <div className="modal__header">
          <h2 id="delete-modal-title">
            {DELETE_MODAL.TITLE}
          </h2>

          <button
            type="button"
            className="modal__close"
            onClick={onCancel}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="modal__body">

          <p>
            {DELETE_MODAL.MESSAGE}
          </p>

          <p className="delete-user-name">
            <strong>
              {user.firstName} {user.lastName}
            </strong>
          </p>

        </div>

        <div className="user-form__actions">

          <button
            type="button"
            className="secondary-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="delete-button"
            onClick={onConfirm}
          >
            Delete User
          </button>

        </div>

      </div>
    </div>
  );
}

export default ConfirmDelete;