import { useEffect, useState } from "react";

import {
  EMPTY_USER,
  FORM_FIELDS,
  FORM_TITLES,
} from "../utils/constants";

import { validateUser } from "../utils/validators";

function UserForm({
  isOpen,
  user,
  onClose,
  onSave,
}) {
  const [formData, setFormData] =
    useState(EMPTY_USER);

  const [validationErrors, setValidationErrors] =
    useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData(EMPTY_USER);
    }

    setValidationErrors({});
  }, [user]);

  if (!isOpen) {
    return null;
  }

  const isEditMode = Boolean(formData.id);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setValidationErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateUser(formData);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const result = await onSave(formData);

      if (!result.success) {
        setValidationErrors(result.errors || {});
        return;
      }

      setValidationErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal">
        <div className="modal__header">
          <h2>
            {isEditMode
              ? FORM_TITLES.EDIT
              : FORM_TITLES.ADD}
          </h2>

          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form
          className="user-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="firstName">
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              name={FORM_FIELDS.FIRST_NAME}
              value={formData.firstName}
              onChange={handleInputChange}
            />

            {validationErrors.firstName && (
              <small className="error-text">
                {validationErrors.firstName}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              name={FORM_FIELDS.LAST_NAME}
              value={formData.lastName}
              onChange={handleInputChange}
            />

            {validationErrors.lastName && (
              <small className="error-text">
                {validationErrors.lastName}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              name={FORM_FIELDS.EMAIL}
              value={formData.email}
              onChange={handleInputChange}
            />

            {validationErrors.email && (
              <small className="error-text">
                {validationErrors.email}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="department">
              Department
            </label>

            <input
              id="department"
              type="text"
              name={FORM_FIELDS.DEPARTMENT}
              value={formData.department}
              onChange={handleInputChange}
            />

            {validationErrors.department && (
              <small className="error-text">
                {validationErrors.department}
              </small>
            )}
          </div>

          <div className="user-form__actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-button"
            >
              {isEditMode
                ? "Update User"
                : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;