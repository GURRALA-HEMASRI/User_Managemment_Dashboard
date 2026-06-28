import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import UserForm from "../components/UserForm";

describe("UserForm", () => {
  const defaultProps = {
    isOpen: true,
    user: {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    },
    onClose: vi.fn(),
    onSave: vi.fn().mockResolvedValue({
      success: true,
      errors: {},
    }),
  };

  test("renders add user title", () => {
    render(<UserForm {...defaultProps} />);

    expect(
      screen.getByText("Add User")
    ).toBeInTheDocument();
  });

  test("renders update title for edit mode", () => {
    render(
      <UserForm
        {...defaultProps}
        user={{
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          department: "Engineering",
        }}
      />
    );

    expect(
      screen.getByText("Edit User")
    ).toBeInTheDocument();
  });

  test("shows validation errors", async () => {
    const user = userEvent.setup();

    render(<UserForm {...defaultProps} />);

    await user.click(
      screen.getByRole("button", {
        name: /add user/i,
      })
    );

    expect(
      screen.getByText(
        "First name is required."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Last name is required."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Email is required."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Department is required."
      )
    ).toBeInTheDocument();
  });

  test("calls onClose", async () => {
    const user = userEvent.setup();

    const onClose = vi.fn();

    render(
      <UserForm
        {...defaultProps}
        onClose={onClose}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    );

    expect(onClose).toHaveBeenCalledTimes(
      1
    );
  });

  test("submits valid form", async () => {
    const user = userEvent.setup();

    const onSave = vi.fn().mockResolvedValue({
      success: true,
      errors: {},
    });

    render(
      <UserForm
        {...defaultProps}
        onSave={onSave}
      />
    );

    await user.type(
      screen.getByLabelText(
        /first name/i
      ),
      "John"
    );

    await user.type(
      screen.getByLabelText(
        /last name/i
      ),
      "Doe"
    );

    await user.type(
      screen.getByLabelText(
        /email/i
      ),
      "john@example.com"
    );

    await user.type(
      screen.getByLabelText(
        /department/i
      ),
      "Engineering"
    );

    await user.click(
      screen.getByRole("button", {
        name: /add user/i,
      })
    );

    expect(onSave).toHaveBeenCalledTimes(
      1
    );
  });
});