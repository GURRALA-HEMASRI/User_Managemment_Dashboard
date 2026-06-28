import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateDepartment,
  validateUser,
  isUserValid,
} from "../utils/validators";

describe("validators", () => {
  describe("validateFirstName", () => {
    test("returns empty string for valid first name", () => {
      expect(validateFirstName("John")).toBe("");
    });

    test("returns error for empty first name", () => {
      expect(validateFirstName("")).toBe(
        "First name is required."
      );
    });
  });

  describe("validateLastName", () => {
    test("returns empty string for valid last name", () => {
      expect(validateLastName("Doe")).toBe("");
    });

    test("returns error for empty last name", () => {
      expect(validateLastName("")).toBe(
        "Last name is required."
      );
    });
  });

  describe("validateEmail", () => {
    test("returns empty string for valid email", () => {
      expect(
        validateEmail("john@example.com")
      ).toBe("");
    });

    test("returns required error for empty email", () => {
      expect(validateEmail("")).toBe(
        "Email is required."
      );
    });

    test("returns invalid email error", () => {
      expect(validateEmail("john")).toBe(
        "Please enter a valid email address."
      );
    });
  });

  describe("validateDepartment", () => {
    test("returns empty string for valid department", () => {
      expect(
        validateDepartment("Engineering")
      ).toBe("");
    });

    test("returns error for empty department", () => {
      expect(validateDepartment("")).toBe(
        "Department is required."
      );
    });
  });

  describe("validateUser", () => {
    test("returns no errors for valid user", () => {
      const user = {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        department: "Engineering",
      };

      expect(validateUser(user)).toEqual({});
    });

    test("returns all validation errors", () => {
      const user = {
        firstName: "",
        lastName: "",
        email: "invalid",
        department: "",
      };

      expect(validateUser(user)).toEqual({
        firstName: "First name is required.",
        lastName: "Last name is required.",
        email:
          "Please enter a valid email address.",
        department: "Department is required.",
      });
    });
  });

  describe("isUserValid", () => {
    test("returns true for valid user", () => {
      expect(
        isUserValid({
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          department: "Engineering",
        })
      ).toBe(true);
    });

    test("returns false for invalid user", () => {
      expect(
        isUserValid({
          firstName: "",
          lastName: "",
          email: "",
          department: "",
        })
      ).toBe(false);
    });
  });
});