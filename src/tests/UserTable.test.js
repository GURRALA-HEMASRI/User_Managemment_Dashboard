import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import UserTable from "../components/UserTable";

describe("UserTable", () => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      department: "Engineering",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      department: "HR",
    },
  ];

  const defaultProps = {
    users,
    sortConfig: {
      field: "id",
      direction: "asc",
    },
    onSort: vi.fn(),
    onEdit: vi.fn(),
    onDelete: vi.fn(),
  };

  test("renders table headers", () => {
    render(<UserTable {...defaultProps} />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Department")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  test("renders user data", () => {
    render(<UserTable {...defaultProps} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(
      screen.getByText("john@example.com")
    ).toBeInTheDocument();

    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Smith")).toBeInTheDocument();
    expect(
      screen.getByText("jane@example.com")
    ).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(
      <UserTable
        {...defaultProps}
        users={[]}
      />
    );

    expect(
      screen.getByText("No users found.")
    ).toBeInTheDocument();
  });

  test("calls onSort when header is clicked", async () => {
    const user = userEvent.setup();

    const onSort = vi.fn();

    render(
      <UserTable
        {...defaultProps}
        onSort={onSort}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /first name/i,
      })
    );

    expect(onSort).toHaveBeenCalledWith(
      "firstName"
    );
  });

  test("calls onEdit when edit button is clicked", async () => {
    const user = userEvent.setup();

    const onEdit = vi.fn();

    render(
      <UserTable
        {...defaultProps}
        onEdit={onEdit}
      />
    );

    await user.click(
      screen.getAllByRole("button", {
        name: /edit/i,
      })[0]
    );

    expect(onEdit).toHaveBeenCalledWith(
      users[0]
    );
  });

  test("calls onDelete when delete button is clicked", async () => {
    const user = userEvent.setup();

    const onDelete = vi.fn();

    render(
      <UserTable
        {...defaultProps}
        onDelete={onDelete}
      />
    );

    await user.click(
      screen.getAllByRole("button", {
        name: /delete/i,
      })[0]
    );

    expect(onDelete).toHaveBeenCalledWith(
      users[0]
    );
  });
});