import { render, screen, fireEvent } from "@testing-library/react";
import { useMutation } from "@tanstack/react-query";
import UpdateProfile from "../update-profile";

jest.mock("@tanstack/react-query", () => ({
  useMutation: jest.fn(),
}));

const mockInitialData = {
  name: "Nuriddinov Qudratjon",
  email: "qudratjonnuriddinov2603@gmail.com",
  bio: "Front End Developer",
};

const mockMutate = jest.fn();

test("renders edit form", () => {
  (useMutation as jest.Mock).mockReturnValue({ mutate: mockMutate });

  render(<UpdateProfile initialData={mockInitialData} />);

  expect(screen.getByDisplayValue("Nuriddinov Qudratjon")).toBeInTheDocument();
  expect(
    screen.getByDisplayValue("qudratjonnuriddinov2603@gmail.com")
  ).toBeInTheDocument();
  expect(screen.getByDisplayValue("Front End Developer")).toBeInTheDocument();
});

test("submits form with valid data", () => {
  (useMutation as jest.Mock).mockReturnValue({ mutate: mockMutate });

  render(<UpdateProfile initialData={mockInitialData} />);

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "Nuriddinov Qudratjon" },
  });
  fireEvent.submit(screen.getByRole("button", { name: /save/i }));

  expect(mockMutate).toHaveBeenCalledWith({
    name: "Nuriddinov Qudratjon",
    email: "qudratjonnuriddinov2603@gmail.com",
    bio: "Front End Developer",
  });
});
